import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-emerald-500">
            TaskRewards
          </Link>
          {!isMobile && (
            <nav className="flex space-x-6">
              <Link to="/tasks" className="text-gray-300 hover:text-emerald-500 transition-colors">
                Tasks
              </Link>
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
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Sign In
          </Button>
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-gray-300">
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <nav className="bg-gray-900 px-4 py-2 animate-fade-up">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/tasks" 
              className="text-gray-300 hover:text-emerald-500 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Tasks
            </Link>
            <Link 
              to="/earn-rewards" 
              className="text-gray-300 hover:text-emerald-500 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Earn Rewards
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-300 hover:text-emerald-500 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/partner-with-us" 
              className="text-gray-300 hover:text-emerald-500 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner With Us
            </Link>
            <Link 
              to="/learn" 
              className="text-gray-300 hover:text-emerald-500 transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};