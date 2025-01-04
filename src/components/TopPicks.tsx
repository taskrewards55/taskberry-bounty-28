import { ArrowRight } from "lucide-react";
import { TaskCard } from "./TaskCard";

export const TopPicks = () => {
  const tasks = [
    {
      logo: "/lovable-uploads/9a81cda6-0a22-4132-8bd8-ce4b58d0aa9e.png",
      title: "Surveys",
      description: "Share your opinion to earn!",
      reward: "0.51",
      amount: "$0.59",
    },
    {
      logo: "/lovable-uploads/629059a5-f1bf-40ab-848b-c7235da57628.png",
      title: "Honeygain",
      description: "Share your spare internet!",
      reward: "0.95",
      amount: "$1.09",
    },
    {
      logo: "/lovable-uploads/738b88e7-1781-4f01-ae47-bd233939517f.png",
      title: "Videos",
      description: "Watch videos & earn!",
      reward: "0.01978",
      amount: "$0.02",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Top Picks</h2>
          <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-sm md:text-base">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tasks.map((task, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <TaskCard {...task} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};