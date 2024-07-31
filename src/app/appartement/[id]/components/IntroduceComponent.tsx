import { $Enums } from "@prisma/client";
import { CaracterAndValidateComponent } from "./CaracterAndValidateComponent";
import { AppartementInterface } from "../../config/AppartementInterface";
import { BadgeDemo } from "./BadgeComponent";

export const AppartementById = ({ appartementInfo }: { appartementInfo: AppartementInterface }) => {

    return (
        <div>
            <section className="bg-muted py-12 md:py-20 lg:py-24">

                <div className="container px-4 md:px-6">

                    <div className="grid gap-6 md:grid-cols-[1fr_400px] lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none flex text-center items-center space-x-2">
                                    <span>{appartementInfo?.name}</span><BadgeDemo/>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    {appartementInfo?.description}
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-1">
                                    <span className="text-sm font-medium">Chambres à coucher</span>
                                    <span className="text-2xl font-bold">{appartementInfo?.chamber}</span>
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-sm font-medium">Salles de bains</span>
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-sm font-medium">Surface</span>
                                    <span className="text-2xl font-bold">{appartementInfo?.size + (appartementInfo?.unity != null ? appartementInfo?.unity : " M2")}</span>
                                </div>
                                <div className="grid gap-1">
                                    <span className="text-sm font-medium">Addresse</span>
                                    <span className="text-2xl font-bold">123 Main St, Anytown USA</span>
                                </div>
                            </div>
                        </div>
                        <img
                            src="/maison.jpg"
                            width="600"
                            height="600"
                            alt="Apartment"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                        />
                    </div>
                </div>
            </section>
            <CaracterAndValidateComponent caracter={{
                id : appartementInfo.id,
                verified: appartementInfo.verified,
                chamber: appartementInfo.chamber,
                living_room: appartementInfo.living_room,
                unte_price: appartementInfo.unte_price
            }} />
        </div>
    )
}