import { Header } from "@/components/Header";
import { HowItWorks as HowItWorksSection } from "@/components/HowItWorks";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HowItWorksSection />
    </div>
  );
}