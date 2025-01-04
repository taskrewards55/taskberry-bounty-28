import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";

interface Reward {
  icon: string;
  amount: string;
  usdAmount: string;
}

export const LatestRewards = () => {
  const rewards: Reward[] = [
    { icon: "🪙", amount: "13.54", usdAmount: "$15.55" },
    { icon: "🛍️", amount: "1.04", usdAmount: "$1.20" },
    { icon: "📦", amount: "0.01", usdAmount: "$0.01" },
    { icon: "✈️", amount: "0.3", usdAmount: "$0.35" },
    { icon: "🎮", amount: "0.01", usdAmount: "$0.01" },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest rewards</h2>
          <div className="flex items-center gap-4">
            <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
              View all <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {rewards.map((reward, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <div className="p-4">
                <div className="text-4xl mb-4">{reward.icon}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">{reward.amount}</span>
                    <span className="text-gray-400">JMPT</span>
                  </div>
                  <span className="text-gray-400">{reward.usdAmount}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};