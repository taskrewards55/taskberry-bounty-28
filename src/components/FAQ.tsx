import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How do I start earning money?",
      answer: "Simply sign up for an account, complete your profile, and start browsing available tasks. Choose tasks that match your skills and interests, complete them accurately, and earn rewards."
    },
    {
      question: "How and when do I get paid?",
      answer: "Payments are processed instantly once you reach the minimum withdrawal threshold. You can choose from multiple payment methods including PayPal, bank transfer, or cryptocurrency."
    },
    {
      question: "What types of tasks are available?",
      answer: "We offer a variety of tasks including surveys, watching videos, testing apps, playing games, and more. New tasks are added daily to provide continuous earning opportunities."
    },
    {
      question: "Is it really free to join?",
      answer: "Yes, it's completely free to join and start earning. We never charge any fees for registration or task completion."
    },
    {
      question: "How much can I earn?",
      answer: "Earnings vary based on the tasks you complete and the time you invest. Some users earn a few dollars daily, while more active users can earn significantly more."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="animate-fade-up bg-gray-50 rounded-lg px-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};