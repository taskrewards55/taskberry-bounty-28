import React from "react";
import { Header } from "@/components/Header";
import { TaskList } from "@/components/TaskList";
import { UserDashboard } from "@/components/UserDashboard";
import { EarningsOverview } from "@/components/EarningsOverview";
import { WithdrawalForm } from "@/components/WithdrawalForm";
import { ReferralSection } from "@/components/ReferralSection";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Task Management</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <UserDashboard />
            <EarningsOverview />
            <WithdrawalForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Available Tasks</h2>
              <TaskList />
            </div>
            <ReferralSection />
          </div>
        </div>
      </main>
    </div>
  );
}