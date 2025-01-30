import { Card } from "./ui/card";
import { Award } from "lucide-react";

export const UserDashboard = () => {
  // This would typically come from an API or database
  const userStats = {
    totalPoints: 180,
    completedTasks: 3,
    availableMoney: "$18.00",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="p-6 bg-gray-800 text-white">
        <div className="flex items-center gap-3">
          <Award className="text-yellow-500 w-8 h-8" />
          <div>
            <p className="text-gray-300">Total Points</p>
            <p className="text-2xl font-bold">{userStats.totalPoints}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 bg-gray-800 text-white">
        <div className="flex items-center gap-3">
          <Check className="text-green-500 w-8 h-8" />
          <div>
            <p className="text-gray-300">Completed Tasks</p>
            <p className="text-2xl font-bold">{userStats.completedTasks}</p>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 bg-gray-800 text-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center text-2xl">💰</div>
          <div>
            <p className="text-gray-300">Available Money</p>
            <p className="text-2xl font-bold">{userStats.availableMoney}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};