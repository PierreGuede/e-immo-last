

import { getAllAppartements, getAppartementById } from "@/actions/appart"
import { NavBar } from "@/components/menu/header/NavBar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { db } from "@/lib/db"

import Link from "next/link"
import { CardsPaymentMethod } from "../components/paiement"
import { $Enums } from "@prisma/client"
import { AppartementById } from "./components/IntroduceComponent"
import { AppartementInterface } from "../config/AppartementInterface"

const Page = async ({ params }: { params: { id: string } }) => {
  
  const appart : AppartementInterface  = await getAppartementById(params.id)
  return (
    <div className="flex flex-col min-h-dvh">
      
      <AppartementById appartementInfo={appart}/>
      
      <section className="py-12 md:py-20 lg:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold">Gallery</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              prefetch={false}
            >
              <img
                src="/maison.jpg"
                width={600}
                height={600}
                alt="Apartment"
                className="aspect-square w-full object-cover"
              />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
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

export default Page;