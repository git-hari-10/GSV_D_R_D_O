import { Link } from "react-router-dom";
import { Zap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-muted mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <img src={logo} alt="Company logo" className="w-10 h-10 rounded-full" />
            </Link>
            <span className="text-xl font-bold">GSV Drones</span>
          </div>
          
          <div className="flex flex-wrap space-x-6">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
              Products
            </Link>
            <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground">
            © 2025 GSV Drones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}