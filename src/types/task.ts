export type TaskCategory = 'basic' | 'premium' | 'achievement';

export interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
  category: TaskCategory;
  completed: boolean;
  dailyLimit?: number;
  currentCount?: number;
  unlockRequirement?: {
    type: 'tasks' | 'referrals' | 'streak';
    count: number;
  };
}