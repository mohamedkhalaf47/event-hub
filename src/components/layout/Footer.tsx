import { Link } from "react-router-dom";
import { Calendar, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-primary" />
            <div>
              <span className="text-lg font-poppins font-semibold text-primary">Festivus</span>
              <p className="text-sm text-muted-foreground">Bringing communities together</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Made with Love */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for communities</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
          © 2024 Festivus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;