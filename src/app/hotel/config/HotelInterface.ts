import { AppartementInterface } from "@/app/appartement/config/AppartementInterface";

export interface hotelInterface {
    id: string;
    name: string;
    cityId: string;
    userId: string;
    city: {
      id: string;
      name : string
    }
  }

  export interface hotelInfoInterface {
    id: string;
    name: string;
    cityId: string;
    userId: string;
    city: {
      id: string;
      name: string;
  };
  Appartement : AppartementInterface
  }