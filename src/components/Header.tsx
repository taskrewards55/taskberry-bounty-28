import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-primary">
            TaskRewards
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              Earn Rewards
            </Link>
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              Partner With Us
            </Link>
            <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
              Learn
            </Link>
          </nav>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          Sign In
        </Button>
      </div>
    </header>
  );
};