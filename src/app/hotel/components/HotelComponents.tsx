
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { FaStar } from "react-icons/fa";
import { hotelInterface } from "@/app/hotel/config/HotelInterface";
import Link from "next/link";

export default async function HotelComponent({hotelList } : {hotelList : hotelInterface[]}) {
  
      
   
  return (
    <div className="flex flex-col min-h-dvh">
        
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Trouvez l'hôtel qui reponds a vos besoins
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Search from thousands of hotels and find the best one for your next trip.
              </p>
              <form className="mt-6 flex gap-2">
                <Input type="text" placeholder="Search by destination, hotel name, or date" className="flex-1" />
                <Button type="submit" className="shrink-0">
                  Search
                </Button>
              </form>
            </div>
            <div className="hidden md:block">
              <img
                src="/maison.jpg"
                width={600}
                height={400}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hotelList.map((hotel) => (
          
              <Card>
                <img
                  src="/maison.jpg"
                  width={400}
                  height={300}
                  alt="Hotel"
                  className="aspect-video rounded-t-xl object-cover"
                />
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <FaStar className="w-4 h-4 fill-primary" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{hotel.city.name}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold">A partir de $199/nuit</span>
                    <Link href={'hotel/'+hotel.id} className="border-[1px] border-gray-200 rounded-lg p-2 text-md">
                      Avoir plus de details
                    </Link>
                  </div>
                </CardContent>
              </Card>
        ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

