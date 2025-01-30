import { Check, Award, Lock, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "sonner";
import { Badge } from "./ui/badge";

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
  category: "free" | "premium" | "milestone";
  limit?: string;
  isLocked?: boolean;
  lockReason?: string;
}

export const TaskList = () => {
  // This would typically come from an API
  const completedTaskCount = 20; // Mock data
  const totalEarnings = 15; // Mock data
  const isPremiumUnlocked = completedTaskCount >= 50;

  const tasks: Task[] = [
    // Free Tasks
    {
      id: "1",
      title: "Watch Videos",
      description: "Watch short videos to earn rewards",
      reward: 0.05,
      completed: false,
      category: "free",
      limit: "10 videos per day",
    },
    {
      id: "2",
      title: "Complete Short Surveys",
      description: "2-3 minute surveys for quick earnings",
      reward: 0.10,
      completed: false,
      category: "free",
    },
    {
      id: "3",
      title: "Daily Check-in",
      description: "Log in daily to earn rewards",
      reward: 0.01,
      completed: false,
      category: "free",
    },
    {
      id: "4",
      title: "Read Articles",
      description: "Read and engage with articles",
      reward: 0.02,
      completed: false,
      category: "free",
      limit: "5 articles per day",
    },
    // Premium Tasks
    {
      id: "5",
      title: "Product Reviews",
      description: "Write detailed product reviews",
      reward: 2.00,
      completed: false,
      category: "premium",
      isLocked: !isPremiumUnlocked,
      lockReason: "Complete 50 free tasks to unlock",
    },
    {
      id: "6",
      title: "App Installations",
      description: "Install and test new applications",
      reward: 1.50,
      completed: false,
      category: "premium",
      isLocked: !isPremiumUnlocked,
      lockReason: "Complete 50 free tasks to unlock",
    },
    // Milestone Tasks
    {
      id: "7",
      title: "Task Completion Milestone",
      description: "Complete 100 tasks for bonus reward",
      reward: 1.00,
      completed: false,
      category: "milestone",
      isLocked: completedTaskCount < 100,
      lockReason: "Complete 100 tasks to unlock",
    },
    {
      id: "8",
      title: "7-Day Streak",
      description: "Log in for 7 consecutive days",
      reward: 1.00,
      completed: false,
      category: "milestone",
    },
  ];

  const handleCompleteTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      if (task.isLocked) {
        toast.error("This task is locked!", {
          description: task.lockReason,
        });
        return;
      }
      toast.success("Task Completed!", {
        description: `You earned $${task.reward.toFixed(2)} for completing "${task.title}"`,
      });
    }
  };

  const renderTaskSection = (category: Task["category"], title: string) => {
    const categoryTasks = tasks.filter(task => task.category === category);
    
    if (categoryTasks.length === 0) return null;

    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryTasks.map((task) => (
            <Card key={task.id} className={`p-6 ${task.isLocked ? 'bg-gray-700' : 'bg-gray-800'} text-white relative`}>
              {task.isLocked && (
                <div className="absolute top-4 right-4">
                  <Lock className="text-yellow-500" />
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{task.title}</h3>
                {task.completed ? (
                  <Check className="text-green-500" />
                ) : null}
              </div>
              <p className="text-gray-300 mb-4">{task.description}</p>
              {task.limit && (
                <Badge variant="secondary" className="mb-4">
                  {task.limit}
                </Badge>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" />
                  <span className="font-semibold">${task.reward.toFixed(2)}</span>
                </div>
                <Button
                  onClick={() => handleCompleteTask(task.id)}
                  disabled={task.completed || task.isLocked}
                  variant="default"
                  className={task.isLocked ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-700"}
                >
                  {task.completed ? "Completed" : task.isLocked ? "Locked" : "Complete Task"}
                </Button>
              </div>
              {task.isLocked && (
                <div className="mt-4 flex items-center gap-2 text-sm text-yellow-500">
                  <AlertCircle className="w-4 h-4" />
                  <span>{task.lockReason}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 bg-gray-800 text-white">
          <h4 className="text-gray-400 mb-2">Completed Tasks</h4>
          <p className="text-2xl font-bold">{completedTaskCount}</p>
        </Card>
        <Card className="p-4 bg-gray-800 text-white">
          <h4 className="text-gray-400 mb-2">Total Earnings</h4>
          <p className="text-2xl font-bold">${totalEarnings.toFixed(2)}</p>
        </Card>
        <Card className="p-4 bg-gray-800 text-white">
          <h4 className="text-gray-400 mb-2">Premium Status</h4>
          <div className="flex items-center gap-2">
            {isPremiumUnlocked ? (
              <Badge variant="success" className="bg-green-500">Unlocked</Badge>
            ) : (
              <Badge variant="secondary" className="bg-gray-600">
                {50 - completedTaskCount} tasks to unlock
              </Badge>
            )}
          </div>
        </Card>
      </div>
      
      {renderTaskSection("free", "Free Tasks")}
      {renderTaskSection("premium", "Premium Tasks")}
      {renderTaskSection("milestone", "Milestone Tasks")}
    </div>
  );
};