import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Share2, Gift } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const ReferralSection = () => {
  const [referralCode, setReferralCode] = useState("");
  const [referralCount, setReferralCount] = useState(0);
  const [totalBonus, setTotalBonus] = useState(0);

  useEffect(() => {
    // Initial fetch of referral data
    const fetchReferralData = async () => {
      const { data: profile } = await supabase
        .from('profiles')
        .select('referral_code')
        .single();

      if (profile) {
        setReferralCode(profile.referral_code);
      }

      const { count } = await supabase
        .from('referrals')
        .select('*', { count: 'exact' })
        .eq('referrer_id', supabase.auth.getUser()?.data?.user?.id);

      if (count !== null) {
        setReferralCount(count);
        setTotalBonus(count * 10);
      }
    };

    fetchReferralData();

    // Subscribe to real-time referral updates
    const channel = supabase
      .channel('referral-updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'referrals',
          filter: `referrer_id=eq.${supabase.auth.getUser()?.data?.user?.id}`,
        },
        () => {
          setReferralCount(prev => {
            const newCount = prev + 1;
            setTotalBonus(newCount * 10);
            toast.success("New referral bonus earned!");
            return newCount;
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success("Referral code copied to clipboard!");
  };

  return (
    <Card className="p-6 bg-gray-800 text-white">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Your Referral Program</h2>
        
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <Input
              value={referralCode}
              readOnly
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <Button onClick={handleCopyCode} className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Copy Code
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-300">Successful Referrals</p>
            <p className="text-3xl font-bold">{referralCount}</p>
          </div>
          <div>
            <p className="text-gray-300">Total Bonus Earned</p>
            <p className="text-3xl font-bold text-green-500">${totalBonus}</p>
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded-lg flex items-start gap-3">
          <Gift className="w-5 h-5 text-yellow-500 mt-1" />
          <div>
            <p className="font-semibold text-yellow-500">Referral Bonus</p>
            <p className="text-sm text-gray-300">
              Share your referral code with friends and both of you will receive a $10 bonus when they complete their first task!
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};