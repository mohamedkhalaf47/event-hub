import { useState } from "react";
import EventCard from "@/components/events/EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Calendar } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Mock events data
  const mockEvents = [
    {
      id: "1",
      title: "Summer Music Festival 2024",
      description: "Join us for an unforgettable night of live music featuring local and international artists.",
      date: "2024-07-15T18:00:00Z",
      location: "Central Park, New York",
      organizer: "Music Events Co.",
      rsvpCount: 342,
      category: "Music"
    },
    {
      id: "2", 
      title: "Food Truck Rally",
      description: "Taste amazing food from the best food trucks in the city. Family-friendly event with live entertainment.",
      date: "2024-06-20T12:00:00Z",
      location: "Downtown Square",
      organizer: "City Events",
      rsvpCount: 156,
      category: "Food"
    },
    {
      id: "3",
      title: "Tech Conference 2024",
      description: "Learn from industry leaders about the latest trends in technology and innovation.",
      date: "2024-08-10T09:00:00Z",
      location: "Convention Center",
      organizer: "Tech Community",
      rsvpCount: 89,
      category: "Technology"
    },
    {
      id: "4",
      title: "Community Clean-Up Day",
      description: "Help make our neighborhood beautiful! Join fellow residents for a community clean-up initiative.",
      date: "2024-06-25T08:00:00Z",
      location: "Riverside Park",
      organizer: "Green Initiative",  
      rsvpCount: 45,
      category: "Community"
    },
    {
      id: "5",
      title: "Art Gallery Opening",
      description: "Discover amazing works by local artists at our newest gallery exhibition opening.",
      date: "2024-07-05T19:00:00Z",
      location: "Modern Art Gallery",
      organizer: "Arts District",
      rsvpCount: 78,
      category: "Art"
    },
    {
      id: "6",
      title: "Startup Pitch Night",
      description: "Watch innovative startups pitch their ideas to investors and vote for your favorite.",
      date: "2024-07-22T18:30:00Z", 
      location: "Innovation Hub",
      organizer: "Startup Network",
      rsvpCount: 134,
      category: "Business"
    }
  ];

  const filteredEvents = mockEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === "rsvp") {
      return b.rsvpCount - a.rsvpCount;
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
          Discover Events
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find amazing events happening in your community. From music festivals to tech conferences, there's something for everyone.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search events by name, location, or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[150px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="rsvp">Sort by RSVPs</SelectItem>
              <SelectItem value="title">Sort by Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Events Count */}
      <div className="mb-6">
        <p className="text-muted-foreground text-center">
          Showing {sortedEvents.length} of {mockEvents.length} events
        </p>
      </div>

      {/* Events Grid */}
      {sortedEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-poppins font-semibold text-xl mb-2">No events found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search terms or check back later for new events.
          </p>
          <Button variant="outline">
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
};

export default Events;