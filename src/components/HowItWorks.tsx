import { CircleDollarSign, ClipboardCheck, UserPlus } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create an account with Google, Facebook, Apple, or a crypto wallet.",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Tasks",
    description: "Browse a wide range of tasks, from games to surveys, and pick the easiest way to earn online.",
  },
  {
    icon: CircleDollarSign,
    title: "Get Paid",
    description: "Follow the task guidelines, complete tasks, and get rewarded. Easily transfer your earnings to your crypto wallet.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 md:p-8 animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Step {index + 1}.</h3>
              <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h4>
              <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};