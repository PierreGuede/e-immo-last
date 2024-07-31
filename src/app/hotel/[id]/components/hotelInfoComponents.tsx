import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { hotelInfoInterface } from "../../config/HotelInterface";
import { ArrowRightIcon, BuildingIcon, ConciergeBellIcon, HomeIcon, LocateIcon, LockIcon, ParkingMeterIcon, PocketIcon, RecycleIcon, SpaceIcon, WifiIcon } from "lucide-react";
import AppartementContent from "./appartementContent";

export default function HotelInfoComponent ({ hotelInfo } : {hotelInfo : hotelInfoInterface}) {
    return (
    <div className="flex flex-col min-h-dvh">
        
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              src="/maison.jpg"
              width="1200"
              height="600"
              alt="Apartment Building"
              className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                {hotelInfo.name}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {hotelInfo.city.name}
                  {/* Experience the ultimate in urban living with our stunning luxury apartments. Featuring high-end
                  finishes, modern amenities, and breathtaking views, these homes are the perfect blend of comfort and
                  sophistication. */}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Voir les appartements
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Programmer un tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    <AppartementContent appartementContent={hotelInfo.Appartement}/>
    </div>
     
    )
}