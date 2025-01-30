import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";
import { supabase } from "@/integrations/supabase/client";

export const EarningsOverview = () => {
  const [balance, setBalance] = useState(0);
  const withdrawalThreshold = 100;

  useEffect(() => {
    // Initial fetch of balance
    const fetchBalance = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('balance')
        .eq('id', user.id)
        .single();
      
      if (profile) {
        setBalance(profile.balance);
      }
    };

    fetchBalance();

    // Subscribe to real-time balance updates
    const channel = supabase
      .channel('balance-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
        },
        (payload: any) => {
          if (payload.new && payload.new.balance !== undefined) {
            setBalance(payload.new.balance);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

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
          <AlertTriangle className="h-4 w-4" />
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