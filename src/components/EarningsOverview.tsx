import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { ExclamationTriangleIcon } from "lucide-react";
import { Card } from "./ui/card";

export const EarningsOverview = () => {
  // This would typically come from an API
  const balance = 80;
  const withdrawalThreshold = 100;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-4">Earnings Overview</h2>
      <Card className="p-6 bg-gray-800 text-white">
        <div className="space-y-4">
          <div>
            <p className="text-gray-300">Current Balance</p>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-300">Withdrawal Threshold</p>
            <p className="text-xl">${withdrawalThreshold.toFixed(2)}</p>
          </div>
        </div>
      </Card>
      
      {balance < withdrawalThreshold && (
        <Alert variant="destructive" className="bg-red-900 border-red-600">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Balance Below Threshold</AlertTitle>
          <AlertDescription>
            Your current balance is below the ${withdrawalThreshold} withdrawal threshold. 
            Complete more tasks to reach the minimum withdrawal amount.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};