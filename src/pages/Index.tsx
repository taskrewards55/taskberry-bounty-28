import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { TaskCard } from "@/components/TaskCard";
import { Button } from "@/components/ui/button";
import VisionSection from "@/components/VisionSection";
import EarnWaysSection from "@/components/EarnWaysSection";

const tasks = [
  {
    logo: "/lovable-uploads/629059a5-f1bf-40ab-848b-c7235da57628.png",
    title: "Honeygain",
    description: "Share internet and earn!",
    reward: "0.26455",
    amount: "≈ $0.50",
  },
  {
    title: "TikTok",
    description: "Watch videos and earn!",
    reward: "0.52910",
    amount: "≈ $1.00",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    title: "Youtube",
    description: "Watch & Earn",
    reward: "0.02077",
    amount: "≈ $0.02",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-up">
            Simple Ways to Make Money Online
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
            Turn your spare time into earnings today. Play games, take surveys, and explore other easy ways to make money online with TaskRewards.
          </p>
          <Button 
            size="lg" 
            className="animate-fade-up bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Start Making Money Now
          </Button>
        </div>
      </section>

      <VisionSection />
      <EarnWaysSection />
      <HowItWorks />

      {/* Tasks Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Available Tasks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tasks.map((task, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <TaskCard {...task} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;