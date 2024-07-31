
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import HotelComponent from "./components/HotelComponents";

export default async function Component() {
  
        const response = await db.hotel.findMany({
          include:{
            city : true
          }
        });
      console.log(response);
  // const [hotels, setHotels] = useState<hotelInterface>();

  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       const response = await db.hotel.findMany();
  //       console.log(response);
        
  //       const data = await response.json();
  //       setHotels(response);
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des hôtels:', error);
  //     }
  //   };

  //   fetchHotels();
  // }, []);
  return (
    <div className="flex flex-col min-h-dvh">
      <HotelComponent hotelList={response}/>

      {/* <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Find your perfect hotel
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
                    <h3 className="text-lg font-semibold">Hotel Acme</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $199/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">The Grand Hotel</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.6</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">New York, NY</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $299/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">Beachside Resort</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Miami, FL</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $249/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">Luxury Suites</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.7</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Chicago, IL</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $399/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">Cozy Inn</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.4</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Seattle, WA</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $149/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">Boutique Hotel</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.5</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Los Angeles, CA</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $279/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">Luxury Resort</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>5.0</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Honolulu, HI</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $499/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                    <h3 className="text-lg font-semibold">Coastal Retreat</h3>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">San Diego, CA</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-semibold">A partir de $349/nuit</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main> */}
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}