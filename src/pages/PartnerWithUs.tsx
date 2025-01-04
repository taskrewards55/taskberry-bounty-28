import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart2, Users, TrendingUp } from "lucide-react";

export default function PartnerWithUs() {
  const benefits = [
    {
      icon: <Users className="w-12 h-12 text-emerald-500" />,
      title: "Global Reach",
      description: "Access our community of active, engaged users ready to complete tasks."
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-emerald-500" />,
      title: "Real-time Analytics",
      description: "Track task performance and user engagement with detailed analytics."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-500" />,
      title: "Maximum ROI",
      description: "Cost-effective solutions designed to maximize your return on investment."
    }
  ];

  const partners = [
    "App developers",
    "Market research companies",
    "E-commerce platforms",
    "Digital marketing agencies"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-up">
            Grow Your Business by Partnering with Us
          </h1>
          <p className="text-2xl text-emerald-400 mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Leverage our platform to reach a global audience and achieve your marketing goals.
          </p>
          <Button 
            size="lg"
            className="animate-fade-up bg-emerald-500 hover:bg-emerald-600"
            style={{ animationDelay: "200ms" }}
          >
            Become a Partner
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Partner Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Who Can Partner With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8 animate-fade-up">
            Ready to take your business to the next level?
          </h2>
          <Button 
            size="lg"
            className="animate-fade-up bg-emerald-500 hover:bg-emerald-600"
            style={{ animationDelay: "100ms" }}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}