import { Search, User, Calendar, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-primary" />
          <span className="text-xl font-poppins font-bold text-primary">Festivus</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="flex-1 mx-8 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search events by name or location"
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link to="/">
            <Button 
              variant="ghost" 
              className={`flex items-center space-x-2 ${isActive('/') ? 'text-primary bg-primary/10' : ''}`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </Link>
          
          <Link to="/create">
            <Button 
              variant="ghost"
              className={`flex items-center space-x-2 ${isActive('/create') ? 'text-primary bg-primary/10' : ''}`}
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Create Event</span>
            </Button>
          </Link>

          <Link to="/profile">
            <Button variant="ghost" size="sm" className="p-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </Link>

          <Button className="btn-gradient-secondary">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;