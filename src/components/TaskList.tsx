import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { TaskCategory } from "./TaskCategory";
import { Task } from "@/types/task";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const TaskList = () => {
  const [completedTaskCount, setCompletedTaskCount] = useState(20);
  const [totalEarnings, setTotalEarnings] = useState(15);
  const isPremiumUnlocked = completedTaskCount >= 50;

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('balance')
        .eq('id', user.id)
        .single();

      if (profile) {
        setTotalEarnings(profile.balance);
      }
    };

    fetchUserData();

    // Subscribe to profile changes for real-time earnings updates
    const channel = supabase
      .channel('profile-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
        },
        (payload: any) => {
          if (payload.new && payload.new.balance !== undefined) {
            setTotalEarnings(payload.new.balance);
            toast.success("Earnings updated!");
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const basicTasks: Task[] = [
    {
      id: "1",
      title: "Watch Videos",
      description: "Watch 30-second videos to earn rewards",
      reward: 0.05,
      category: "basic",
      completed: false,
      dailyLimit: 10,
      currentCount: 0,
    },
    {
      id: "2",
      title: "Quick Surveys",
      description: "Complete 2-3 minute surveys",
      reward: 0.10,
      category: "basic",
      completed: false,
    },
    {
      id: "3",
      title: "Daily Check-in",
      description: "Log in daily to earn rewards",
      reward: 0.01,
      category: "basic",
      completed: false,
    },
    {
      id: "4",
      title: "Read Articles",
      description: "Read sponsored articles",
      reward: 0.02,
      category: "basic",
      completed: false,
      dailyLimit: 5,
      currentCount: 0,
    },
    {
      id: "5",
      title: "Social Media Tasks",
      description: "Follow accounts and engage with posts",
      reward: 0.05,
      category: "basic",
      completed: false,
    },
  ];

  const premiumTasks: Task[] = [
    {
      id: "6",
      title: "Product Reviews",
      description: "Write detailed product reviews",
      reward: 2.00,
      category: "premium",
      completed: false,
    },
    {
      id: "7",
      title: "App Testing",
      description: "Test and review applications",
      reward: 1.50,
      category: "premium",
      completed: false,
    },
    {
      id: "8",
      title: "Partner Signups",
      description: "Sign up for partner programs",
      reward: 3.00,
      category: "premium",
      completed: false,
    },
    {
      id: "9",
      title: "Comprehensive Surveys",
      description: "Complete 10-15 minute detailed surveys",
      reward: 2.00,
      category: "premium",
      completed: false,
    },
    {
      id: "10",
      title: "Content Creation",
      description: "Create promotional content",
      reward: 5.00,
      category: "premium",
      completed: false,
    },
  ];

  const achievementTasks: Task[] = [
    {
      id: "11",
      title: "Task Milestone",
      description: "Complete 100 tasks for bonus reward",
      reward: 1.00,
      category: "achievement",
      completed: false,
      unlockRequirement: {
        type: "tasks",
        count: 100,
      },
    },
    {
      id: "12",
      title: "Referral Champion",
      description: "Refer 10 active users",
      reward: 10.00,
      category: "achievement",
      completed: false,
      unlockRequirement: {
        type: "referrals",
        count: 10,
      },
    },
    {
      id: "13",
      title: "Weekly Streak",
      description: "Log in for 7 consecutive days",
      reward: 1.00,
      category: "achievement",
      completed: false,
      unlockRequirement: {
        type: "streak",
        count: 7,
      },
    },
  ];

  return (
    <div className="space-y-12">
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
              <span className="text-green-400">Unlocked</span>
            ) : (
              <span className="text-yellow-400">
                {50 - completedTaskCount} tasks to unlock
              </span>
            )}
          </div>
        </Card>
      </div>

      <TaskCategory
        title="Basic Tasks"
        description="Complete these tasks to earn rewards and unlock premium tasks"
        tasks={basicTasks}
      />

      <TaskCategory
        title="Premium Tasks"
        description="Higher-paying tasks for experienced users"
        tasks={premiumTasks}
        isLocked={!isPremiumUnlocked}
        unlockRequirement="50 basic tasks"
      />

      <TaskCategory
        title="Achievements"
        description="Special rewards for reaching milestones"
        tasks={achievementTasks}
      />
    </div>
  );
};