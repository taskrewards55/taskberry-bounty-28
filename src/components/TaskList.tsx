import { Check, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useToast } from "./ui/use-toast";

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
}

export const TaskList = () => {
  const { toast } = useToast();

  // This would typically come from an API or database
  const tasks: Task[] = [
    {
      id: "1",
      title: "Complete Survey",
      description: "Share your opinion about our platform",
      reward: 50,
      completed: false,
    },
    {
      id: "2",
      title: "Watch Tutorial",
      description: "Learn how to maximize your earnings",
      reward: 30,
      completed: false,
    },
    {
      id: "3",
      title: "Refer a Friend",
      description: "Invite friends to join the platform",
      reward: 100,
      completed: false,
    },
  ];

  const handleCompleteTask = (taskId: string) => {
    // In a real app, this would update the database
    toast({
      title: "Task Completed!",
      description: "Your reward has been added to your balance.",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <Card key={task.id} className="p-6 bg-gray-800 text-white">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold">{task.title}</h3>
            {task.completed ? (
              <Check className="text-green-500" />
            ) : null}
          </div>
          <p className="text-gray-300 mb-6">{task.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="text-yellow-500" />
              <span className="font-semibold">{task.reward} points</span>
            </div>
            <Button
              onClick={() => handleCompleteTask(task.id)}
              disabled={task.completed}
              variant="default"
              className="bg-blue-600 hover:bg-blue-700"
            >
              {task.completed ? "Completed" : "Complete Task"}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};