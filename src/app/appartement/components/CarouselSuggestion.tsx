import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/ButtonUI"
import { EyeIcon, MapIcon } from "lucide-react"
import Link from "next/link"

export function CarouselSuggestion() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="w-full mx-auto space-y-8 py-8">
      
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="space-y-2 aspect-square items-center justify-center p-2 ">
                    <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                      <Image
                        src="/maison.jpg"
                        width={800}
                        height={800}
                        alt="Picture of the author"
                        className=' pointer-events-none  transition duration-300 ease-in-out hover:scale-110  mx-auto'
                      />
                    </div>
                    <Link href="#" className="">Chambre à louer dans un appartement de 4 chambres </Link>
                    <div className=" mt-12">

                      <div className="text-sm mt-2 text-gray-700  flex justify-between ">
                        <span className="w-1/2 dark:text-white">Loyer: 45.000 CFA/mois</span>
                        <span className="w-1/2 text-right dark:text-white">Statut : <span className="text-green-400 text-xs">disponible</span></span>
                      </div>
                    </div>
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                  </CardContent>
                  <CardFooter className="flex w-full justify-center ">
                    <div className="flex space-x-2 items-center text-slate-500 w-1/2 dark:text-white"><MapIcon className="h-3 w-3" /> <span>Godomey</span></div>
                    {/* <Button variant="outline" className="w-1/2 rounded-none">Learn More</Button> */}
                    <Link href="" className=" w-1/2 space-x-2 text-white flex items-center justify-center p-2 rounded-md bg-[#123C3F] text-primary-foreground hover:bg-[#123C3F]/90"> <EyeIcon className="h-4 w-4" /> <span>Visualiser</span></Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
