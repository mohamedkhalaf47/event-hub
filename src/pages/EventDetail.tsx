import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users, Clock, Edit, Trash2, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EventDetail = () => {
  const { id } = useParams();
  const [isRSVPed, setIsRSVPed] = useState(false);
  const [rsvpCount, setRsvpCount] = useState(42);
  const { toast } = useToast();

  // Mock event data - in real app this would come from API
  const event = {
    id: id || "1",
    title: "Community Garden Festival",
    description: "Join us for a celebration of local produce, sustainable living, and community spirit! This family-friendly festival features local vendors, live music, gardening workshops, and delicious food made from fresh, locally-grown ingredients.\n\nActivities include:\n• Guided garden tours\n• Composting workshop\n• Kids' planting activities\n• Live acoustic performances\n• Farm-to-table food trucks\n• Seed swap market\n\nCome connect with your neighbors and learn about sustainable gardening practices while enjoying great food and entertainment!",
    date: "2024-09-15T14:00:00",
    location: "Riverside Community Garden, 123 Green Street",
    organizer: "Sarah Green",
    organizerAvatar: "",
    category: "Community",
    attendees: [
      { name: "John D.", avatar: "" },
      { name: "Maria S.", avatar: "" },
      { name: "Alex K.", avatar: "" },
      { name: "Emma W.", avatar: "" },
    ]
  };

  const handleRSVP = () => {
    setIsRSVPed(!isRSVPed);
    setRsvpCount(prev => isRSVPed ? prev - 1 : prev + 1);
    
    toast({
      title: isRSVPed ? "RSVP Cancelled" : "RSVP Confirmed! 🎉",
      description: isRSVPed 
        ? "You're no longer attending this event." 
        : "We're excited to see you there!",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      full: date.toLocaleDateString('en', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      time: date.toLocaleTimeString('en', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    };
  };

  const { full, time } = formatDate(event.date);

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <Badge variant="secondary" className="mb-2">
                {event.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-2">
                {event.title}
              </h1>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>

          {/* Event Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{full}</p>
                <p className="text-sm text-muted-foreground">{time}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium text-accent">{rsvpCount} attending</p>
                <p className="text-sm text-muted-foreground">Join them!</p>
              </div>
            </div>
          </div>

          {/* RSVP Button */}
          <Button 
            onClick={handleRSVP}
            className={`${isRSVPed ? 'btn-gradient-accent' : 'btn-gradient-secondary'} text-lg px-8 py-6`}
            size="lg"
          >
            <Users className="h-5 w-5 mr-2" />
            {isRSVPed ? "You're Going!" : "RSVP Now"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {event.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Organizer */}
            <Card>
              <CardHeader>
                <CardTitle>Organized by</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={event.organizerAvatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {event.organizer.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{event.organizer}</p>
                    <p className="text-sm text-muted-foreground">Event Organizer</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">2 hours duration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Free admission</span>
                </div>
              </CardContent>
            </Card>

            {/* Attendees */}
            <Card>
              <CardHeader>
                <CardTitle>Who's Going</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {event.attendees.map((attendee, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={attendee.avatar} />
                        <AvatarFallback className="bg-muted text-xs">
                          {attendee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{attendee.name}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      +{rsvpCount - event.attendees.length} others
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;