import { CheckIcon } from "lucide-react"
import { CardsPaymentMethod } from "../../components/paiement"
import { CaracterAndValidateInterface } from "../../config/AppartementInterface"

export const CaracterAndValidateComponent = ({ caracter }: { caracter: CaracterAndValidateInterface }) => {
    return (
        <div>
            <section className="py-12 md:py-20 lg:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                        <div className="">
                            <h2 className="mb-6 text-2xl font-bold">Caractéristiques de la propriété</h2>
                            <ul className="grid gap-4">
                                {
                                    caracter.chamber != 0 ? (
                                        <li className="flex items-center gap-4">
                                            <CheckIcon className="h-5 w-5 text-primary" />
                                            <span>Chambre(s) équipée(s);</span>
                                        </li>
                                    )
                                        : null
                                }
                                {
                                    caracter.living_room != 0 ? (
                                        <li className="flex items-center gap-4">
                                            <CheckIcon className="h-5 w-5 text-primary" />
                                            <span>Salon inclus</span>
                                        </li>
                                    )
                                        : null
                                }
                                {
                                    caracter.unte_price != 0 ? (
                                        <li className="flex items-center gap-4">
                                            <CheckIcon className="h-5 w-5 text-primary" />
                                            <span>Prix unitaire disponible et pret pour commande</span>
                                        </li>
                                    )
                                        : null
                                }
                                {
                                    caracter.chamber != 0 ? (
                                        <li className="flex items-center gap-4">
                                            <CheckIcon className="h-5 w-5 text-primary" />
                                            <span>Hardwood floors throughout</span>
                                        </li>
                                    )
                                        : null
                                }
                                {
                                    caracter.chamber != 0 ? (
                                        <li className="flex items-center gap-4">
                                            <CheckIcon className="h-5 w-5 text-primary" />
                                            <span>Hardwood floors throughout</span>
                                        </li>
                                    )
                                        : null
                                }
                                {
                                    caracter.chamber != 0 ? (
                                        <li className="flex items-center gap-4">
                                            <CheckIcon className="h-5 w-5 text-primary" />
                                            <span>Hardwood floors throughout</span>
                                        </li>
                                    )
                                        : null
                                }
                            </ul>
                        </div>
                        <CardsPaymentMethod price={caracter.unte_price} id = {caracter.id} />
                    </div>

                </div>
            </section>
        </div>
    )
}