
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSession } from "@/App";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const { session } = useSession();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!session) return;
      
      const { data: isAdminUser, error } = await supabase.rpc('is_admin') as { data: boolean, error: null | Error };
      if (!error && isAdminUser) {
        setIsAdmin(true);
      }
    };

    checkAdminStatus();
  }, [session]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const navigation = [
    { name: "Earn Rewards", href: "/earn-rewards" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Partner with Us", href: "/partner-with-us" },
    { name: "Learn", href: "/learn" },
    ...(session ? [{ name: "Tasks", href: "/tasks" }] : []),
    ...(isAdmin ? [{ name: "Admin", href: "/admin" }] : []),
  ];

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to="/" className="text-white text-2xl font-bold">
              Logo
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm ${
                    location.pathname === item.href
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <Button
                variant="outline"
                className="text-white hover:text-gray-800"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="text-white hover:text-gray-800">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 ${
                  location.pathname === item.href
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {session ? (
              <Button
                variant="outline"
                className="w-full text-white hover:text-gray-800 mt-4"
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Link to="/auth" className="block" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full text-white hover:text-gray-800 mt-4"
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
