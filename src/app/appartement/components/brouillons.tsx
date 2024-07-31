// import { useRouter } from 'next/navigation'
// import { NavBar } from "@/components/menu/header/NavBar";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React from "react";
// import Autoplay from "embla-carousel-autoplay"
// import { Card, CardContent } from "@/components/ui/card";
// import { Home, HomeIcon, Verified } from "lucide-react";
// import InfoLocation from "../components/InfoAppart";
// import ChoiceAccordion from "../components/ChoiceAccordion";
// import { Button } from "@/components/ui/ButtonUI";
// import DateCompare from '../components/DateCompare';
// import { CarouselSuggestion } from '../components/CarouselSuggestion';
// import { FooterComponent } from '@/components/menu/footer/footer';

// export default function AppartID({ params }: { params: { id: number } }) {
//     const plugin = React.useRef(
//         Autoplay({ delay: 2000, stopOnInteraction: true })
//     )
//     const router = useRouter()

//     return (
//         <div>
//             <NavBar />
//             <hr className="w-11/12 mx-auto border-1 border-[#123C3F]" />

//             <div className="w-10/12 mx-auto flex space-x-4 py-8">
//                 <div className="w-7/12 p-2  rounded-md">
//                     <Carousel className="w-full max-w-lg pb-8 ">
//                         <CarouselContent className="">
//                             {Array.from({ length: 5 }).map((_, index) => (
//                                 <CarouselItem key={index} className="">
//                                     <div className="p-1 flex  items-center justify-center ">
//                                         <Image key={index} src="/maison.jpg" className="rounded-md" alt="picture image" width={550} height={450} />
//                                     </div>
//                                 </CarouselItem>
//                             ))}
//                         </CarouselContent>
//                         <CarouselPrevious size="icon" className="left-2   bg-transparent" />
//                         <CarouselNext size="icon" className="right-2   bg-transparent" />
//                     </Carousel>
//                     <hr />
//                     <div className="py-8 space-y-4">
//                         <div className="space-y-4">
//                             <p className="text-xl font-semibold"> Appartement Studio à Cotonou</p>
//                             <div className="flex space-x-4 ">
//                                 <span className="text-sm text-gray-800 w-1/4 dark:text-inherit"> Chambre : 1</span>
//                                 <span className="text-sm text-gray-800 w-1/4 dark:text-inherit"> Cours commune : non</span>
//                                 <span className="text-sm text-gray-800 w-1/4 dark:text-inherit"> Salle de bain : 1</span>
//                                 <span className="text-sm text-gray-800 w-1/4 dark:text-inherit"> Superficie 100m2</span>
//                             </div>
//                         </div>
//                         <div className="flex space-x-4 items-center">
//                             <Verified className="w-[50px] h-[50px] text-cyan-900" />
//                             <div>
//                                 <p className="text-lg font-semibold text-gray-800 dark:text-inherit">Vérifié par les dirigeant d'E-immo</p>
//                                 <p className="text-sm text-gray-700 dark:text-inherit">Notre Demarcheur a examiné la maison pour s'assurer que vous obtenez exactement ce que vous voyez dans l'annonce.</p>
//                             </div>
//                         </div>
//                         <div className="flex space-x-4 items-center">
//                             <Home className="w-[50px] h-[50px] font-thin" />
//                             <div>
//                                 <p className="text-lg font-semibold text-gray-800 dark:text-inherit">Information du propriétaire</p>
//                                 <p className="text-sm text-gray-700 dark:text-inherit">Le propriétaire de cette maison est fiable. Cliquez sur "Faire une visite" pour entrer en contact avec lui</p>
//                             </div>
//                         </div>
//                         <InfoLocation />
//                     </div>
//                 </div>

//                 <div className="w-5/12 p-2 space-y-4">
//                 <div className="rounded-md border-2 py-8">
//                         <DateCompare />
//                         {/* <div className="py-8 text-center">
//                             <Button onClick={() => router.push('/paiement')}>Entammer les procédures de visite</Button>
//                         </div> */}
//                     </div>
//                     <div className="rounded-md border-2 py-8">
//                         <ChoiceAccordion />
//                         <div className="py-8 text-center ">
//                             <Button onClick={() => router.push('/paiement')} className='dark:text-white'>Entammer les procédures de visite</Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-10/12 mx-auto space-y-12">
//                 <h1 className='underline text-2xl font-semibold '>Autre location proposées:</h1>
//                 <CarouselSuggestion/>
//             </div>
//             <FooterComponent/>
//         </div>

//     )
// }


// pages/appartement/[id].js
