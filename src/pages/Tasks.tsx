import React from "react";
import { Header } from "@/components/Header";
import { TaskList } from "@/components/TaskList";
import { UserDashboard } from "@/components/UserDashboard";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Task Management</h1>
        <UserDashboard />
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Available Tasks</h2>
          <TaskList />
        </div>
      </main>
    </div>
  );
}