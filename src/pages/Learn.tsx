import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { BookOpen, HelpCircle, Users, TrendingUp } from "lucide-react";

export default function Learn() {
  const faqs = [
    {
      question: "How does the platform work?",
      answer: "Our platform connects users with various tasks they can complete to earn rewards. Simply sign up, choose tasks that interest you, and start earning!"
    },
    {
      question: "What payment methods are available?",
      answer: "We offer multiple payment options including cryptocurrency wallets, PayPal, and bank transfers, depending on your location."
    },
    {
      question: "How do I increase my earnings?",
      answer: "Complete high-paying tasks regularly, participate in special promotions, and refer friends to earn bonus rewards."
    }
  ];

  const tips = [
    "Prioritize high-paying tasks to boost earnings",
    "Consistently refer friends for bonus rewards",
    "Watch for exclusive promotions and limited-time offers",
    "Complete daily tasks to maintain steady earnings"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-up">
            Knowledge at Your Fingertips
          </h1>
          <p className="text-2xl text-emerald-400 mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Find answers, tips, and resources to maximize your earning potential.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <HelpCircle className="w-8 h-8 text-emerald-500" />
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-700 p-6 rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-emerald-500" />
            Tips and Tricks
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center justify-center gap-4">
            <BookOpen className="w-8 h-8 text-emerald-500" />
            Latest Articles
          </h2>
          <Button 
            size="lg"
            className="animate-fade-up bg-emerald-500 hover:bg-emerald-600"
          >
            Explore Our Blog
          </Button>
        </div>
      </section>
    </div>
  );
}