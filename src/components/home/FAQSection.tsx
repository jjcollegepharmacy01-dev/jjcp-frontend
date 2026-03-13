import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqBg from "@/assets/faq-bg.webp";

const faqs = [
  {
    q: 'How does the department help a student become "Industry Ready"?',
    a: "Through Industrial Visits, Workshops, Internships, Trainings, and Guest Lectures from industry experts.",
  },
  {
    q: "What career areas can I explore after graduating from Pharmacy?",
    a: "Clinical Research, Medical Sales, Pharmacology, Product Development, Regulatory Affairs, Research Science, Toxicology, and more.",
  },
  {
    q: "What job opportunities are available after graduation?",
    a: "Industries, Pharmacovigilance, Medical Coding, Pharma Marketing, Hospital Pharmacists, R&D, Drug Inspector, Health Inspector, and Teaching.",
  },
];

const FAQSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img src={faqBg} alt="Students studying" className="w-full h-[350px] object-cover" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
