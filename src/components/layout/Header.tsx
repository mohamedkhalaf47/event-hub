import { Search, User, Calendar, Home, Menu, Grid3X3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
        <div className="hidden md:flex flex-1 mx-8 max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search events by name or location"
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/">
            <Button 
              variant="ghost" 
              className={`flex items-center space-x-2 ${isActive('/') ? 'text-primary bg-primary/10' : ''}`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Button>
          </Link>
          
          <Link to="/events">
            <Button 
              variant="ghost"
              className={`flex items-center space-x-2 ${isActive('/events') ? 'text-primary bg-primary/10' : ''}`}
            >
              <Grid3X3 className="h-4 w-4" />
              <span>Events</span>
            </Button>
          </Link>
          
          <Link to="/create">
            <Button 
              variant="ghost"
              className={`flex items-center space-x-2 ${isActive('/create') ? 'text-primary bg-primary/10' : ''}`}
            >
              <Calendar className="h-4 w-4" />
              <span>Create Event</span>
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

          <Link to="/auth">
            <Button className="btn-gradient-secondary">
              Sign In
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto flex items-center space-x-2">
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="p-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </Link>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 pt-8">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search events..."
                    className="pl-10 bg-muted/50"
                  />
                </div>
                
                {/* Mobile Links */}
                <div className="flex flex-col space-y-2">
                  <Link to="/">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start space-x-2 ${isActive('/') ? 'text-primary bg-primary/10' : ''}`}
                    >
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Button>
                  </Link>
                  
                  <Link to="/events">
                    <Button 
                      variant="ghost"
                      className={`w-full justify-start space-x-2 ${isActive('/events') ? 'text-primary bg-primary/10' : ''}`}
                    >
                      <Grid3X3 className="h-4 w-4" />
                      <span>Events</span>
                    </Button>
                  </Link>
                  
                  <Link to="/create">
                    <Button 
                      variant="ghost"
                      className={`w-full justify-start space-x-2 ${isActive('/create') ? 'text-primary bg-primary/10' : ''}`}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Create Event</span>
                    </Button>
                  </Link>
                  
                  <Link to="/profile">
                    <Button 
                      variant="ghost"
                      className={`w-full justify-start space-x-2 ${isActive('/profile') ? 'text-primary bg-primary/10' : ''}`}
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Button>
                  </Link>
                  
                  <Link to="/auth" className="pt-4">
                    <Button className="btn-gradient-secondary w-full">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;