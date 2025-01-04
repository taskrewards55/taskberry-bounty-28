import { List, Database, ChartBar, Wifi } from "lucide-react";
import { Card } from "./ui/card";

export const TaskTypes = () => {
  const tasks = [
    {
      icon: <List className="w-8 h-8 text-white" />,
      title: "Tasks",
      description: "Earn by doing various microtasks",
      bgColor: "bg-emerald-500",
      badge: "New tasks everyday",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Staking",
      description: "Investing JumpTokens",
      bgColor: "bg-pink-500",
      badge: "🔥",
    },
    {
      icon: <ChartBar className="w-8 h-8 text-white" />,
      title: "Surveys",
      description: "Sharing opinion",
      bgColor: "bg-red-600",
    },
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      title: "Honeygain",
      description: "Bandwidth sharing",
      bgColor: "bg-amber-400",
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold text-white">Have a minute?</h2>
          <p className="text-2xl font-semibold text-emerald-400">Earn now!</p>
          <p className="text-gray-300">Choose one of the task types and start.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((task, index) => (
            <Card
              key={index}
              className={`${task.bgColor} p-6 cursor-pointer group transition-transform hover:scale-[1.02] animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/10 rounded-full">
                    {task.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {task.title}
                    </h3>
                    <p className="text-white/80">{task.description}</p>
                  </div>
                </div>
                {task.badge && (
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                    {task.badge}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};