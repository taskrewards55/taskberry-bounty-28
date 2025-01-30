import { Header } from "@/components/Header";
import { HowItWorks } from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { EarnWaysSection } from "@/components/EarnWaysSection";
import { TaskTypes } from "@/components/TaskTypes";
import { TopPicks } from "@/components/TopPicks";
import { LatestRewards } from "@/components/LatestRewards";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, Users, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-up">
            Turn Your Free Time Into Real Earnings
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
            Join thousands of users earning rewards through simple online tasks. Start with a $10 bonus and unlock premium opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Link to="/tasks">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg">
                Start Earning Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center">
              <DollarSign className="w-12 h-12 text-emerald-500" />
              <div>
                <h3 className="text-3xl font-bold text-white">$250K+</h3>
                <p className="text-gray-400">Paid to Users</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Users className="w-12 h-12 text-blue-500" />
              <div>
                <h3 className="text-3xl font-bold text-white">50K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Trophy className="w-12 h-12 text-yellow-500" />
              <div>
                <h3 className="text-3xl font-bold text-white">1M+</h3>
                <p className="text-gray-400">Tasks Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TaskTypes />
      <TopPicks />
      <LatestRewards />
      <EarnWaysSection />
      <HowItWorks />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join now and get your $10 welcome bonus. Start completing tasks and earning rewards today!
          </p>
          <Link to="/tasks">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg">
              Get Started Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;