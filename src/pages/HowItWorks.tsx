import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create an account using your email, Google, Facebook, or crypto wallet. Signing up takes less than a minute, and it's completely free."
    },
    {
      number: "2",
      title: "Complete Tasks",
      description: "Browse through a wide range of tasks that suit your interests and schedule. From surveys and app downloads to playing games and referrals, we have something for everyone."
    },
    {
      number: "3",
      title: "Get Paid",
      description: "Follow task guidelines, complete them successfully, and watch your earnings grow. When ready, transfer your earnings securely to your crypto wallet or withdraw through other methods."
    }
  ];

  const features = [
    "Simple and user-friendly interface",
    "A variety of tasks catering to different skill sets",
    "Transparent and secure payment systems",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl font-bold text-white mb-12 animate-fade-up">
            Three Simple Steps to Start Earning Today
          </h1>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-700 p-8 rounded-lg animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-emerald-500 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-up">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8 animate-fade-up">
            Sign Up Today and Start Completing Tasks!
          </h2>
          <Button 
            size="lg"
            className="animate-fade-up bg-emerald-500 hover:bg-emerald-600"
            style={{ animationDelay: "100ms" }}
          >
            Create Your Account
          </Button>
        </div>
      </section>
    </div>
  );
}