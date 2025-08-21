import heroImage from "@/assets/hero-events.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Users, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import EventCard from "@/components/events/EventCard";

const Index = () => {
  // Mock featured events data
  const featuredEvents = [
    {
      id: "1",
      title: "Community Garden Festival",
      description: "Join us for a celebration of local produce, sustainable living, and community spirit!",
      date: "2024-09-15T14:00:00",
      location: "Riverside Community Garden, 123 Green Street",
      organizer: "Sarah Green",
      rsvpCount: 42,
      category: "Community"
    },
    {
      id: "2",
      title: "Tech Networking Meetup",
      description: "Connect with local tech professionals and entrepreneurs in a relaxed environment.",
      date: "2024-09-20T18:30:00",
      location: "Innovation Hub Downtown",
      organizer: "TechSF Group",
      rsvpCount: 28,
      category: "Professional"
    },
    {
      id: "3",
      title: "Sunset Yoga Session",
      description: "Unwind with a peaceful yoga practice while watching the sunset over the ocean.",
      date: "2024-09-18T18:00:00",
      location: "Ocean Beach",
      organizer: "Mindful Movement",
      rsvpCount: 15,
      category: "Wellness"
    },
    {
      id: "4",
      title: "Local Art Exhibition",
      description: "Discover amazing artwork from talented local artists in our community gallery.",
      date: "2024-09-22T10:00:00",
      location: "Community Arts Center",
      organizer: "Arts Collective",
      rsvpCount: 67,
      category: "Arts"
    },
    {
      id: "5",
      title: "Food Truck Friday",
      description: "Enjoy delicious food from various local food trucks and live entertainment.",
      date: "2024-09-25T17:00:00",
      location: "Central Park Plaza",
      organizer: "City Events",
      rsvpCount: 124,
      category: "Food"
    },
    {
      id: "6",
      title: "Weekend Hiking Adventure",
      description: "Explore beautiful local trails with fellow hiking enthusiasts of all levels.",
      date: "2024-09-28T08:00:00",
      location: "Mountain Trail Head",
      organizer: "Outdoor Club",
      rsvpCount: 35,
      category: "Outdoor"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>
        
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Discover Amazing
              <span className="block text-primary">Community Events</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with your community through exciting events, workshops, and gatherings. 
              Create memories and build lasting relationships.
            </p>
            
            {/* Hero Search */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search events near you..."
                  className="pl-10 h-12 bg-background/80 backdrop-blur"
                />
              </div>
              <Link to="/search">
                <Button size="lg" className="btn-gradient-primary w-full sm:w-auto">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/create">
                <Button size="lg" className="btn-gradient-secondary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur">
                <Users className="h-4 w-4 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Events Created</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-accent mb-2">10K+</h3>
                <p className="text-muted-foreground">Community Members</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-secondary mb-2">25+</h3>
                <p className="text-muted-foreground">Cities Connected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                Featured Events
              </h2>
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the most popular and exciting events happening in your community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/search">
              <Button size="lg" variant="outline">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
