import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Logo } from "../header/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterComponent() {
    return (
        <div className=" bg-gray-300 dark:bg-slate-800">
            <MaxWidthWrapper className='py-20'>
                <h1 className='text-center text-lg  font-bold tracking-tight  '>
                    Suivez nous pour plus d'information
                </h1>
                <div className="mt-4 p-1 bg-white rounded-full w-full sm:w-10/12 lg:w-2/6 mx-auto flex sm:justify-between items-center">
                    <Input type="text" className=" items-center  xs:w-1/2 bg-transparent  sm:w-9/12  mx-auto outline-none border-none" placeholder="Enter Your Email..." />
                    <Button className="bg-[#63FC1A] sm:px-8 text-black font-semibold rounded-full">Souscrire</Button>
                </div>
                <div className="text-center my-12 items-center justify-center mx-auto  w-11/12 grid grid-cols-1 gray-y-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-1 lg:gap-y-0">
                    <div className="text-left space-y-4 pr-4">
                        <div className="text-center ">
                            <Logo />

                        </div>
                        <div className="block py-7">
                            <p className=" font-semibold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                        </div>
                    </div>

                    <div className="text-left space-y-4">
                        <div className="text-left ">
                            <h1 className=" font-semibold text-xl">Pannel Space</h1>

                        </div>
                        <ul className="block  space-y-2 ">
                            <li><Link href="">Login </Link></li>
                            <li><Link href="">Register </Link></li>
                            <li><Link href="">Terns and Contitions </Link></li>
                            <li><Link href="">Privacy Policy </Link></li>
                            <li><Link href="">Xxxx Xxxx Xxxx Xxxx </Link></li>
                        </ul>
                    </div>

                    <div className="text-left space-y-4">
                        <div className="text-left ">
                            <h1 className=" font-semibold text-xl">Useful Links</h1>

                        </div>
                        <ul className="block  space-y-2 ">
                            <li>
                                <Link className="xl:p-2 hover:underline   " href="/">
                                    Louer
                                </Link>
                            </li>
                            <li>
                                <Link className="xl:p-2 hover:underline  hover: transition" href="/about">
                                    Appartement
                                </Link>
                            </li>
                            <li>
                                <Link className="xl:p-2 hover:underline  hover: transition" href="/cause">
                                    Parcelles
                                </Link>
                            </li>
                            <li>
                                <Link className="xl:p-2 hover:underline  hover: transition" href="/envent">
                                    Contacts
                                </Link>
                            </li>
                            <li>
                                <Link className="xl:p-2 hover:underline  hover: transition" href="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-left space-y-4">
                        <div className="text-left ">
                            <h1 className=" font-semibold text-xl">Contact</h1>

                        </div>
                        <ul className="block  space-y-2 ">
                            <li><Link href="">Xxxx Xxxx Xxxx Xxxx </Link></li>
                            <li><Link href="">Xxxx Xxxx Xxxx Xxxx </Link></li>
                            <li><Link href="">Xxxx Xxxx Xxxx Xxxx </Link></li>
                            <li><Link href="">Xxxx Xxxx Xxxx Xxxx </Link></li>
                            <li><Link href="">Xxxx Xxxx Xxxx Xxxx </Link></li>
                        </ul>
                    </div>
                </div>


            </MaxWidthWrapper>
            <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
                <p className="text-xs text-muted-foreground">&copy; 2024 E-immo. Tous droit reservé.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Privacy Policy
                    </Link>
                </nav>
            </div>
        </div>
    )
}