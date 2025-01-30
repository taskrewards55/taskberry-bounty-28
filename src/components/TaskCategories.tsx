import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Star, Trophy, Timer } from "lucide-react";
import { toast } from "sonner";

interface Task {
  id: string;
  title: string;
  reward: number;
  description: string;
  limit?: string;
  isPremium?: boolean;
  isLocked?: boolean;
}

const freeTasks: Task[] = [
  {
    id: "video",
    title: "Watch Videos",
    reward: 0.05,
    description: "Watch short videos to earn rewards",
    limit: "10 videos per day"
  },
  {
    id: "survey",
    title: "Complete Surveys",
    reward: 0.10,
    description: "Short 2-3 minute surveys",
  },
  {
    id: "checkin",
    title: "Daily Check-in",
    reward: 0.01,
    description: "Log in daily to earn rewards",
  },
  {
    id: "article",
    title: "Read Articles",
    reward: 0.02,
    description: "Read informative articles",
    limit: "5 articles per day"
  },
  {
    id: "social",
    title: "Social Media Tasks",
    reward: 0.05,
    description: "Follow accounts and engage with posts",
  }
];

const premiumTasks: Task[] = [
  {
    id: "review",
    title: "Product Reviews",
    reward: 2.00,
    description: "Write detailed product reviews",
    isPremium: true,
    isLocked: true
  },
  {
    id: "app",
    title: "App Installations",
    reward: 1.50,
    description: "Download and test new apps",
    isPremium: true,
    isLocked: true
  },
  {
    id: "affiliate",
    title: "Affiliate Sign-ups",
    reward: 3.00,
    description: "Sign up for partner services",
    isPremium: true,
    isLocked: true
  },
  {
    id: "advanced-survey",
    title: "Advanced Surveys",
    reward: 2.00,
    description: "Complete in-depth surveys (10-15 minutes)",
    isPremium: true,
    isLocked: true
  }
];

const milestones = [
  {
    id: "100-tasks",
    title: "Complete 100 Tasks",
    reward: 1.00,
    description: "Bonus for completing 100 tasks",
    icon: Trophy
  },
  {
    id: "referral-10",
    title: "Refer 10 Users",
    reward: 10.00,
    description: "Unlock exclusive premium task",
    icon: Star
  },
  {
    id: "streak-7",
    title: "7-Day Streak",
    reward: 1.00,
    description: "Log in for 7 consecutive days",
    icon: Timer
  }
];

export const TaskCategories = () => {
  const handleTaskClick = (task: Task) => {
    if (task.isLocked) {
      toast.error("Complete 50 free tasks to unlock premium tasks!");
      return;
    }
    toast.success(`Starting task: ${task.title}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Free Tasks */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Free Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{task.title}</span>
                      <Badge variant="secondary">${task.reward.toFixed(2)}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{task.description}</p>
                    {task.limit && (
                      <p className="text-sm text-gray-500 mb-4">{task.limit}</p>
                    )}
                    <Button 
                      onClick={() => handleTaskClick(task)}
                      className="w-full"
                    >
                      Start Task
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium Tasks */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-3xl font-bold">Premium Tasks</h2>
              <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-yellow-600">
                Higher Rewards
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-lg transition-shadow border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="flex items-center gap-2">
                        {task.title}
                        {task.isLocked && <Lock className="w-4 h-4 text-gray-400" />}
                      </span>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        ${task.reward.toFixed(2)}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{task.description}</p>
                    <Button 
                      onClick={() => handleTaskClick(task)}
                      className="w-full"
                      variant={task.isLocked ? "secondary" : "default"}
                    >
                      {task.isLocked ? "Locked" : "Start Task"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Milestone Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {milestones.map((milestone) => (
                <Card key={milestone.id} className="hover:shadow-lg transition-shadow bg-gradient-to-b from-purple-50 to-white">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span className="flex items-center gap-2">
                        <milestone.icon className="w-5 h-5 text-purple-500" />
                        {milestone.title}
                      </span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        ${milestone.reward.toFixed(2)}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};