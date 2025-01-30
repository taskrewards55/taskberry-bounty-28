export const generateReferralCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 8;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const calculateEarnings = (tasks: any[], referrals: number) => {
  const taskEarnings = tasks.reduce((total, task) => total + (task.completed ? task.reward : 0), 0);
  const referralEarnings = referrals * 10; // $10 per referral
  return taskEarnings + referralEarnings;
};