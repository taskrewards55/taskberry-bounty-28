import { Copyright, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-500">TaskRewards</h3>
            <p className="text-sm">
              Turn your spare time into earnings with our innovative reward platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/earn-rewards" className="hover:text-emerald-500">Earn Rewards</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-emerald-500">How It Works</Link>
              </li>
              <li>
                <Link to="/partner-with-us" className="hover:text-emerald-500">Partner With Us</Link>
              </li>
              <li>
                <Link to="/learn" className="hover:text-emerald-500">Learn</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-500">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for the latest updates and rewards.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded-l focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-r hover:bg-emerald-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Copyright className="w-4 h-4" />
            <span className="text-sm">2024 TaskRewards. All rights reserved.</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-emerald-500">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500">Terms of Service</a>
            <a href="#" className="hover:text-emerald-500">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};