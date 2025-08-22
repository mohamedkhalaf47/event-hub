import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EventCardProps {
	id: string;
	title: string;
	description: string;
	date: string;
	location: string;
	organizer: string;
	rsvpCount: number;
	category?: string;
	imageUrl?: string;
}

const EventCard = ({
	id,
	title,
	description,
	date,
	location,
	organizer,
	rsvpCount,
	category = "Community",
}: EventCardProps) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return {
			day: date.getDate(),
			month: date.toLocaleDateString("en", { month: "short" }),
			time: date.toLocaleTimeString("en", {
				hour: "numeric",
				minute: "2-digit",
				hour12: true,
			}),
		};
	};

	const { day, month, time } = formatDate(date);

	const [isRSVPed, setIsRSVPed] = useState(false);
	const { toast } = useToast();
	const handleRSVP = () => {
		setIsRSVPed(!isRSVPed);
		toast({
			title: isRSVPed ? "RSVP Cancelled" : "RSVP Confirmed! 🎉",
			description: isRSVPed
				? "You're no longer attending this event."
				: "We're excited to see you there!",
		});
	};

	return (
		<Card className="card-hover h-full flex flex-col">
			<CardHeader className="pb-3">
				<div className="flex items-start justify-between">
					<div className="flex items-center space-x-3">
						<div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
							<span className="text-xs font-medium">{month}</span>
							<span className="text-lg font-bold leading-none">{day}</span>
						</div>
						<div className="flex-1">
							<h3 className="font-poppins font-semibold text-lg line-clamp-2">
								{title}
							</h3>
							<p className="text-sm text-muted-foreground">{time}</p>
						</div>
					</div>
					<Badge variant="secondary" className="text-xs">
						{category}
					</Badge>
				</div>
			</CardHeader>

			<CardContent className="flex-1 pb-3">
				<p className="text-sm text-muted-foreground mb-3 line-clamp-2">
					{description}
				</p>

				<div className="space-y-2">
					<div className="flex items-center text-sm text-muted-foreground">
						<MapPin className="h-4 w-4 mr-2 text-primary/70" />
						<span className="truncate">{location}</span>
					</div>

					<div className="flex items-center justify-between text-sm">
						<div className="flex items-center text-muted-foreground">
							<Users className="h-4 w-4 mr-2 text-accent/70" />
							<span className="text-accent font-medium">
								{rsvpCount} attending
							</span>
						</div>
						<span className="text-xs text-muted-foreground">
							by {organizer}
						</span>
					</div>
				</div>
			</CardContent>

			<CardFooter className="pt-0">
				<div className="flex w-full space-x-2">
					<Link to={`/event/${id}`} className="flex-1">
						<Button variant="outline" className="w-full">
							View Details
						</Button>
					</Link>
					<Button
						className={`btn-gradient-secondary flex-1 ${
							isRSVPed ? "btn-gradient-accent" : "btn-gradient-secondary"
						}`}
						onClick={handleRSVP}
					>
						{isRSVPed ? "You Joined The Event!" : "Join Now"}
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
};

export default EventCard;
