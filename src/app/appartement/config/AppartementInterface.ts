import { $Enums } from "@prisma/client";

export interface AppartementInterface {
    id: string;
    name: string;
    description: string | null;
    verified: boolean;
    size: number;
    unity: $Enums.UnitMeasure | null;
    chamber: number;
    living_room: number;
    unte_price: number;
    cityId: string;
}

export interface CaracterAndValidateInterface  {
    id: string,
    verified: boolean;
    chamber: number;
    living_room: number;
    unte_price: number;
}