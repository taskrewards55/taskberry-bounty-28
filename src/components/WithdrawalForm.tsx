import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { toast } from "sonner";

export const WithdrawalForm = () => {
  const [amount, setAmount] = useState("");
  const balance = 80; // This would typically come from an API
  const minWithdrawal = 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const withdrawalAmount = parseFloat(amount);

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    if (withdrawalAmount > balance) {
      toast.error("Insufficient balance");
      return;
    }

    if (withdrawalAmount < minWithdrawal) {
      toast.error(`Minimum withdrawal amount is $${minWithdrawal}`);
      return;
    }

    // Here you would typically make an API call to process the withdrawal
    toast.success("Withdrawal request submitted successfully");
    setAmount("");
  };

  return (
    <Card className="p-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Request Withdrawal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
            Amount (USD)
          </label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            step="0.01"
            className="bg-gray-700 border-gray-600 text-white"
          />
        </div>
        <Button type="submit" className="w-full">
          Request Withdrawal
        </Button>
      </form>
    </Card>
  );
};