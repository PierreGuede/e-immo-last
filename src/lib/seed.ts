"use server"
// pages/api/generate-users.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';
import {UnitMeasure,  UserRole } from '@prisma/client';
import { db } from "@/lib/db";



export const generateFakeUsers = async (count: number) => {
  const fakeUsers: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    password: string | null;
    role: UserRole;
    isTwoFactorEnabled: boolean;
  }[] = [];

  for (let i = 0; i < count; i++) {
    const fakeUser = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      emailVerified: faker.datatype.boolean() ? faker.date.recent() : null,
      image: faker.internet.avatar(),
      password: faker.internet.password(),
      role: faker.helpers.arrayElement(['USER', 'ADMIN']) as UserRole,
      isTwoFactorEnabled: faker.datatype.boolean(),
    };
    fakeUsers.push(fakeUser);
  }

  await db.user.createMany({
    data: fakeUsers,
  });

  return fakeUsers;
};

export const generateFakeData = async () => {

  const fakeUsers: {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    password: string | null;
    role: UserRole;
    isTwoFactorEnabled: boolean;
  }[] = [];

  for (let i = 0; i < 10; i++) {
    const fakeUser = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      emailVerified: faker.datatype.boolean() ? faker.date.recent() : null,
      image: faker.internet.avatar(),
      password: faker.internet.password(),
      role: faker.helpers.arrayElement(['USER', 'ADMIN', "PROFFESSIONAL", "HOTEL"]) as UserRole,
      isTwoFactorEnabled: faker.datatype.boolean(),
    };
    fakeUsers.push(fakeUser);
  }

  await db.user.createMany({
    data: fakeUsers,
  });

    // Create some cities
    const cities = [];
    for (let i = 0; i < 5; i++) {
      const city = await db.city.create({
        data: {
          name: faker.address.city(),
        },
      });
      cities.push(city);
    }
  
     // Create some cities
     const hotel = [];
     for (let i = 0; i < 5; i++) {
       const city = await db.hotel.create({
         data: {
           name: faker.company.name(),
           cityId: cities[faker.datatype.number({ min: 0, max: cities.length - 1 })].id,
           userId: fakeUsers[faker.datatype.number({ min: 0, max: fakeUsers.filter(user => user.role === 'HOTEL').length - 1 })].id,
          },
       });
       hotel.push(city);
     }
  
     
     // Create appartements
     const appartements = [];
    let userId = null;
    let hotelId = null;
  
    if (faker.datatype.boolean()) {
      // Définir userId et laisser hotelId null
      userId = fakeUsers[faker.datatype.number({ min: 0, max: fakeUsers.length - 1 })].id;
    } else {
      // Définir hotelId et laisser userId null
      hotelId = hotel[faker.datatype.number({ min: 0, max: hotel.length - 1 })].id;
    }
    for (let i = 0; i < 15; i++) {
      const appartement = await db.appartement.create({
        data: {
          name: faker.lorem.words(2),
          description: faker.lorem.sentences(),
          verified: faker.datatype.boolean(),
          size: faker.datatype.float({ min: 20, max: 200 }),
          unity: UnitMeasure.M,
          chamber: faker.datatype.number({ min: 1, max: 5 }),
          living_room: faker.datatype.number({ min: 1, max: 3 }),
          unte_price: faker.datatype.float({ min: 100, max: 1000 }),
          cityId: cities[faker.datatype.number({ min: 0, max: cities.length - 1 })].id,
          userId: userId,
      hotelId: hotelId,
        },
      });
      appartements.push(appartement);
    }
  
    // Create parcelles
    const parcelles = [];
    for (let i = 0; i < 15; i++) {
      const parcelle = await db.parcelle.create({
        data: {
          name: faker.lorem.words(2),
          description: faker.lorem.sentences(),
          verified: faker.datatype.boolean(),
          size: faker.datatype.float({ min: 20, max: 200 }),
          unity: UnitMeasure.M,
          unte_price: faker.datatype.float({ min: 100, max: 1000 }),
          cityId: cities[faker.datatype.number({ min: 0, max: cities.length - 1 })].id,
        },
      });
      parcelles.push(parcelle);
    }
  
    // Create homes
    const homes = [];
    for (let i = 0; i < 15; i++) {
      const home = await db.home.create({
        data: {
          name: faker.lorem.words(2),
          description: faker.lorem.sentences(),
          verified: faker.datatype.boolean(),
          size: faker.datatype.float({ min: 20, max: 200 }),
          unity: UnitMeasure.M,
          chamber: faker.datatype.number({ min: 1, max: 5 }),
          living_room: faker.datatype.number({ min: 1, max: 3 }),
          piscine: faker.datatype.boolean(),
          garage: faker.datatype.boolean(),
          unte_price: faker.datatype.float({ min: 100, max: 1000 }),
          cityId: cities[faker.datatype.number({ min: 0, max: cities.length - 1 })].id,
        },
      });
      homes.push(home);
    }
  
    console.log('Fake data generated successfully');
  };
  