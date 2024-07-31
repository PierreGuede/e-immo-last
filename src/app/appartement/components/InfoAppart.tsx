import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { ChevronDownIcon } from "lucide-react"

export default function InfoAppart() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <h2 className="text-xl font-bold mb-8 text-center">Informations supplementaires</h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="faq-1">
          <AccordionTrigger className="flex items-center justify-between w-full   px-6 py-4 rounded-md font-medium">
            Presentation
            
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">
            To change your home address, log into your account and navigate to the 'Settings' section. There you can
            update your address information. Make sure to save the changes before exiting.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger className="flex items-center justify-between w-full   px-6 py-4 rounded-md font-medium">
            Prix
            
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">
            If you're moving to a new city, you'll need to update your home address as well as your billing address. You
            can do this by following the same steps as changing your home address. Make sure to update any recurring
            deliveries or services as well.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger className="flex items-center justify-between w-full   px-6 py-4 rounded-md font-medium">
            Règles importantes
            
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700">
            To update your billing address, go to the 'Billing' section of your account. There you can edit your address
            information. Make sure to save the changes, as this will update the address used for any future charges or
            invoices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}