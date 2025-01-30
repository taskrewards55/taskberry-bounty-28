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
      <CardHeader className="p-8 flex items-center justify-center">
        <img src="/lovable-uploads/a05d9540-e407-4133-ab55-5e8173102226.png" alt={title} className="h-20 w-auto object-contain" />
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