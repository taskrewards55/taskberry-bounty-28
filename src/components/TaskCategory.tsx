import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Lock, Check } from "lucide-react";
import { Task } from "@/types/task";
import { toast } from "sonner";
interface TaskCategoryProps {
  title: string;
  description: string;
  tasks: Task[];
  isLocked?: boolean;
  unlockRequirement?: string;
}
export const TaskCategory = ({
  title,
  description,
  tasks,
  isLocked,
  unlockRequirement
}: TaskCategoryProps) => {
  const handleTaskComplete = (task: Task) => {
    if (isLocked) {
      toast.error(`Complete ${unlockRequirement} to unlock ${title} tasks!`);
      return;
    }
    if (task.dailyLimit && task.currentCount && task.currentCount >= task.dailyLimit) {
      toast.error(`Daily limit reached for ${task.title}`);
      return;
    }
    toast.success(`Completed ${task.title}! Earned $${task.reward.toFixed(2)}`);
  };
  return <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-inherit">{title}</h3>
        {isLocked && <Badge variant="secondary" className="bg-yellow-600">
            <Lock className="w-3 h-3 mr-1" />
            Locked
          </Badge>}
      </div>
      <p className="text-gray-400">{description}</p>
      
      <div className="grid gap-4">
        {tasks.map(task => <Card key={task.id} className="p-6 bg-gray-800 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold mb-2">{task.title}</h4>
                <p className="text-gray-400">{task.description}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-400">
                  ${task.reward.toFixed(2)}
                </p>
                {task.dailyLimit && <p className="text-sm text-gray-400">
                    {task.currentCount || 0}/{task.dailyLimit} today
                  </p>}
              </div>
            </div>
            <div className="flex justify-between items-center">
              {task.completed ? <Badge className="bg-green-600">
                  <Check className="w-3 h-3 mr-1" />
                  Completed
                </Badge> : <Badge variant="secondary" className="bg-blue-600">
                  Available
                </Badge>}
              <Button onClick={() => handleTaskComplete(task)} disabled={isLocked || task.completed} variant={isLocked ? "secondary" : "default"}>
                {isLocked ? "Locked" : task.completed ? "Completed" : "Complete Task"}
              </Button>
            </div>
          </Card>)}
      </div>
    </div>;
};