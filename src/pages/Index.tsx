import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import VisionSection from "@/components/VisionSection";
import EarnWaysSection from "@/components/EarnWaysSection";
import { TasksForEveryone } from "@/components/TasksForEveryone";
import { GlobalEarning } from "@/components/GlobalEarning";
import { InstantPayments } from "@/components/InstantPayments";
import { EarnFromDevices } from "@/components/EarnFromDevices";
import { FAQ } from "@/components/FAQ";
import { Leaderboard } from "@/components/Leaderboard";
import { LatestRewards } from "@/components/LatestRewards";
import { TaskTypes } from "@/components/TaskTypes";

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

      <TaskTypes />
      <Leaderboard />
      <LatestRewards />
      <TasksForEveryone />
      <GlobalEarning />
      <InstantPayments />
      <VisionSection />
      <EarnWaysSection />
      <EarnFromDevices />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default Index;