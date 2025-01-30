import React from "react";
import { Header } from "@/components/Header";
import { TaskTypes } from "@/components/TaskTypes";
import { EarnWaysSection } from "@/components/EarnWaysSection";
import { TopPicks } from "@/components/TopPicks";

export default function Tasks() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
              Available Tasks
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl animate-fade-up" style={{ animationDelay: "100ms" }}>
              Choose from a variety of tasks and start earning rewards today. Complete surveys, 
              play games, or participate in research studies - there's something for everyone!
            </p>
          </div>
        </section>
        
        <TaskTypes />
        <TopPicks />
        <EarnWaysSection />
      </main>
    </div>
  );
}