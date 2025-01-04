import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TaskCardProps {
  logo: string;
  title: string;
  description: string;
  reward: string;
  amount: string;
}

export const TaskCard = ({ logo, title, description, reward, amount }: TaskCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-6">
        <img src="/lovable-uploads/27415bf1-da36-4237-8aaa-9a608ddb986d.png" alt={title} className="h-12 w-auto" />
      </CardHeader>
      <CardContent className="bg-gray-900 text-white p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">{reward}</span>
            <span className="text-gray-400">JMPT</span>
          </div>
          <span className="text-sm text-gray-400">≈ {amount}</span>
        </div>
      </CardContent>
    </Card>
  );
};