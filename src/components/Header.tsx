import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-emerald-500">
            TaskRewards
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/earn-rewards" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Earn Rewards
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-emerald-500 transition-colors">
              How It Works
            </Link>
            <Link to="/partner-with-us" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Partner With Us
            </Link>
            <Link to="/learn" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Learn
            </Link>
          </nav>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          Sign In
        </Button>
      </div>
    </header>
  );
};