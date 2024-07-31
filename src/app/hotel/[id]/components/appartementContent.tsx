import Link from "next/link"
import { AppartementInterface } from "@/app/appartement/config/AppartementInterface";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRightIcon, BuildingIcon, ConciergeBellIcon, HomeIcon, LocateIcon, LockIcon, ParkingMeterIcon, PocketIcon, RecycleIcon, SpaceIcon, WifiIcon } from "lucide-react";

export default function AppartementContent ({appartementContent} : { appartementContent : AppartementInterface[]}) {
    return (
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {appartementContent.map((appartement) => (
          
              <Card key={appartement.id} className="group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                <Link href={`/appartement/${appartement.id}`} className="block" prefetch={false}>
                  <img
                    src="/maison.jpg"
                    width="400"
                    height="250"
                    alt="Apartment 1"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                  />
                </Link>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-medium">{appartement.name}</div>
                    <div className="text-primary">{appartement.unte_price}FCFA</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">Chambre : {appartement.chamber} - Douche : {appartement.living_room} - Taille: {appartement.size}m²</div>
                  <Link
                    href={`/appartement/${appartement.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    prefetch={false}
                  >
                    Voir les details
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
        ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Luxury Amenities and Features
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <HomeIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">Fitness Center</h3>
                      <p className="text-muted-foreground">State-of-the-art gym with the latest equipment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <PocketIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">Outdoor Pool</h3>
                      <p className="text-muted-foreground">Relax and unwind in our beautiful outdoor pool.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ParkingMeterIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">Parking</h3>
                      <p className="text-muted-foreground">Secure underground parking available.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ConciergeBellIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">Concierge Service</h3>
                      <p className="text-muted-foreground">Dedicated concierge to assist with your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <SpaceIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">Resident Lounge</h3>
                      <p className="text-muted-foreground">Relax and socialize in our modern resident lounge.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <WifiIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="text-lg font-medium">High-Speed WiFi</h3>
                      <p className="text-muted-foreground">Blazing-fast internet throughout the building.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Building Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-4">
                      <BuildingIcon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Modern Architecture</h3>
                        <p className="text-muted-foreground">Designed by award-winning architects.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <LocateIcon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Prime Location</h3>
                        <p className="text-muted-foreground">Steps away from shops, restaurants, and transit.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <LockIcon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Secure Building</h3>
                        <p className="text-muted-foreground">24/7 security and controlled building access.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <RecycleIcon className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-medium">Sustainable Design</h3>
                        <p className="text-muted-foreground">Energy-efficient features and eco-friendly materials.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

    )
}