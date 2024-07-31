
import { db } from "@/lib/db";
// import { generateFakeData } from "@/lib/seed";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()


// export default async function Location() {
//     const appartement = await db.appartement.findMany()
//     // const appartement = getAllAppartements()
//    console.log(appartement);
   
// //    generateFakeData()
//     return (
//         <div>
//               {appartement.map((appartement) => (
// 				<div key={appartement.id}>{appartement.name}</div>
// 			))}
            
//         </div>
//     )

// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PINRSRGkkij
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-[url('/placeholder.svg')] bg-cover bg-center py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Your Perfect Apartment</h1>
            <p className="text-muted-foreground md:text-xl">
              Browse our selection of beautiful apartments in the best neighborhoods.
            </p>
            <form className="flex items-center gap-2 bg-background rounded-lg p-2 shadow-lg">
              <Input
                type="search"
                placeholder="Search by location, price, or amenities"
                className="flex-1 bg-transparent"
              />
              <Button className="px-6 py-2">Search</Button>
            </form>
          </div>
        </div>
      </section>
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 py-12 md:py-16">
        <div className="space-y-6">
          <div className="grid gap-4">
            <h3 className="text-xl font-semibold">Filters</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="bedrooms">
                <AccordionTrigger className="text-base font-medium">Bedrooms</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="bedrooms-1" /> 1+
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="bedrooms-2" /> 2+
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="bedrooms-3" /> 3+
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="bedrooms-4" /> 4+
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price">
                <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-500" /> $500 - $1,000
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-1000" /> $1,000 - $1,500
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-1500" /> $1,500 - $2,000
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="price-2000" /> $2,000+
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="location">
                <AccordionTrigger className="text-base font-medium">Location</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="location-downtown" /> Downtown
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="location-uptown" /> Uptown
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="location-suburbs" /> Suburbs
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Button variant="outline" className="w-full">
            Apply Filters
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Apartment</span>
            </Link>
            <img
              src="/maison.jpg"
              alt="Apartment Image"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Cozy 1BR Apartment in Downtown</h3>
              <p className="text-muted-foreground">$1,200 / month · 1 bed · 1 bath</p>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Apartment</span>
            </Link>
            <img
              src="/maison.jpg"
              alt="Apartment Image"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Spacious 2BR Apartment in Uptown</h3>
              <p className="text-muted-foreground">$1,800 / month · 2 beds · 1 bath</p>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Apartment</span>
            </Link>
            <img
              src="/maison.jpg"
              alt="Apartment Image"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Charming Studio Apartment in Suburbs</h3>
              <p className="text-muted-foreground">$950 / month · Studio · 1 bath</p>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Apartment</span>
            </Link>
            <img
              src="/maison.jpg"
              alt="Apartment Image"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Modern 3BR Apartment in Downtown</h3>
              <p className="text-muted-foreground">$2,500 / month · 3 beds · 2 baths</p>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Apartment</span>
            </Link>
            <img
              src="/maison.jpg"
              alt="Apartment Image"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Cozy 1BR Apartment in Uptown</h3>
              <p className="text-muted-foreground">$1,300 / month · 1 bed · 1 bath</p>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Apartment</span>
            </Link>
            <img
              src="/maison.jpg"
              alt="Apartment Image"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-80 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Spacious 2BR Apartment in Suburbs</h3>
              <p className="text-muted-foreground">$1,600 / month · 2 beds · 1 bath</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}