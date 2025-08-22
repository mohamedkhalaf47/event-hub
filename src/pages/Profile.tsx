import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Users, Edit, Mail, User } from "lucide-react";
import EventCard from "@/components/events/EventCard";

const Profile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [profile, setProfile] = useState({
		name: "Alex Johnson",
		email: "alex.johnson@email.com",
		bio: "Community enthusiast who loves bringing people together through amazing events. Passionate about sustainability, local food, and creating memorable experiences.",
		location: "San Francisco, CA",
		joinDate: "March 2023",
	});

	// Mock data for organized events
	const organizedEvents = [
		{
			id: "1",
			title: "Community Garden Festival",
			description: "A celebration of local produce and sustainable living",
			date: "2024-09-15T14:00:00",
			location: "Riverside Community Garden",
			organizer: "Alex Johnson",
			rsvpCount: 42,
			category: "Community",
		},
		{
			id: "2",
			title: "Tech Networking Meetup",
			description: "Connect with local tech professionals",
			date: "2024-09-20T18:30:00",
			location: "Innovation Hub Downtown",
			organizer: "Alex Johnson",
			rsvpCount: 28,
			category: "Professional",
		},
	];

	// Mock data for attended events
	const attendedEvents = [
		{
			id: "3",
			title: "Summer Music Festival",
			description: "Three days of incredible live music performances",
			date: "2024-08-12T16:00:00",
			location: "Golden Gate Park",
			organizer: "City Events",
			rsvpCount: 1200,
			category: "Music",
		},
		{
			id: "4",
			title: "Startup Pitch Night",
			description: "Local entrepreneurs pitch their innovative ideas",
			date: "2024-08-18T19:00:00",
			location: "TechSpace Venue",
			organizer: "Startup Hub",
			rsvpCount: 85,
			category: "Business",
		},
	];

	const handleSaveProfile = () => {
		setIsEditing(false);
		// In real app, this would save to backend
	};

	return (
		<div className="container py-8">
			<div className="max-w-4xl mx-auto">
				{/* Profile Header */}
				<Card className="card-hover mb-8">
					<CardHeader>
						<div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
							<Avatar className="h-24 w-24">
								<AvatarImage src="" />
								<AvatarFallback className="bg-primary/10 text-primary text-2xl">
									{profile.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>

							<div className="flex-1">
								<div className="flex flex-col md:flex-row md:items-center justify-between">
									<div>
										<h1 className="text-3xl font-poppins font-bold mb-2">
											{profile.name}
										</h1>
										<div className="flex items-center space-x-4 text-muted-foreground mb-3">
											<div className="flex items-center space-x-1">
												<Mail className="h-4 w-4" />
												<span className="sm:text-sm text-xs">
													{profile.email}
												</span>
											</div>
											<div className="flex items-center space-x-1">
												<MapPin className="h-4 w-4" />
												<span className="sm:text-sm text-xs">
													{profile.location}
												</span>
											</div>
										</div>
										<Badge className="my-2" variant="secondary">
											Member since {profile.joinDate}
										</Badge>
									</div>

									<Dialog open={isEditing} onOpenChange={setIsEditing}>
										<DialogTrigger asChild>
											<Button variant="outline" aria-label="Edit Profile">
												<Edit className="h-4 w-4 mr-2" />
												Edit Profile
											</Button>
										</DialogTrigger>
										<DialogContent>
											<DialogHeader>
												<DialogTitle>Edit Profile</DialogTitle>
												<DialogDescription>
													Update your profile information
												</DialogDescription>
											</DialogHeader>
											<div className="space-y-4">
												<div className="space-y-2">
													<Label htmlFor="name">Full Name</Label>
													<Input
														id="name"
														value={profile.name}
														onChange={(e) =>
															setProfile((prev) => ({
																...prev,
																name: e.target.value,
															}))
														}
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="email">Email</Label>
													<Input
														id="email"
														type="email"
														value={profile.email}
														onChange={(e) =>
															setProfile((prev) => ({
																...prev,
																email: e.target.value,
															}))
														}
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="location">Location</Label>
													<Input
														id="location"
														value={profile.location}
														onChange={(e) =>
															setProfile((prev) => ({
																...prev,
																location: e.target.value,
															}))
														}
													/>
												</div>
												<div className="space-y-2">
													<Label htmlFor="bio">Bio</Label>
													<Textarea
														id="bio"
														value={profile.bio}
														onChange={(e) =>
															setProfile((prev) => ({
																...prev,
																bio: e.target.value,
															}))
														}
														rows={3}
													/>
												</div>
												<div className="flex justify-end space-x-2">
													<Button
														variant="outline"
														aria-label="Cancel"
														onClick={() => setIsEditing(false)}
													>
														Cancel
													</Button>
													<Button
														onClick={handleSaveProfile}
														className="btn-gradient-primary"
														aria-label="Save Changes"
													>
														Save Changes
													</Button>
												</div>
											</div>
										</DialogContent>
									</Dialog>
								</div>
							</div>
						</div>

						{profile.bio && (
							<div className="mt-4 pt-4 border-t">
								<p className="text-muted-foreground">{profile.bio}</p>
							</div>
						)}
					</CardHeader>
				</Card>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
					<Card>
						<CardContent className="p-6 text-center">
							<Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
							<h3 className="text-2xl font-bold text-primary">
								{organizedEvents.length}
							</h3>
							<p className="text-sm text-muted-foreground">Events Organized</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6 text-center">
							<Users className="h-8 w-8 text-accent mx-auto mb-2" />
							<h3 className="text-2xl font-bold text-accent">
								{attendedEvents.length}
							</h3>
							<p className="text-sm text-muted-foreground">Events Attended</p>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6 text-center">
							<User className="h-8 w-8 text-secondary mx-auto mb-2" />
							<h3 className="text-2xl font-bold text-secondary">
								{organizedEvents.reduce(
									(sum, event) => sum + event.rsvpCount,
									0
								)}
							</h3>
							<p className="text-sm text-muted-foreground">Total RSVPs</p>
						</CardContent>
					</Card>
				</div>

				{/* Event History Tabs */}
				<Tabs defaultValue="organized" className="space-y-6">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="organized">Organized Events</TabsTrigger>
						<TabsTrigger value="attended">Attended Events</TabsTrigger>
					</TabsList>

					<TabsContent value="organized" className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Events You've Organized</CardTitle>
								<CardDescription>
									Manage and track the events you've created
								</CardDescription>
							</CardHeader>
							<CardContent>
								{organizedEvents.length > 0 ? (
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{organizedEvents.map((event) => (
											<EventCard key={event.id} {...event} />
										))}
									</div>
								) : (
									<div className="text-center py-12">
										<Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
										<p className="text-muted-foreground mb-4">
											You haven't organized any events yet
										</p>
										<Button
											className="btn-gradient-secondary"
											aria-label="create event"
										>
											Create Your First Event
										</Button>
									</div>
								)}
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="attended" className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Events You've Attended</CardTitle>
								<CardDescription>
									Your event attendance history and upcoming events
								</CardDescription>
							</CardHeader>
							<CardContent>
								{attendedEvents.length > 0 ? (
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{attendedEvents.map((event) => (
											<EventCard key={event.id} {...event} />
										))}
									</div>
								) : (
									<div className="text-center py-12">
										<Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
										<p className="text-muted-foreground mb-4">
											You haven't attended any events yet
										</p>
										<Button
											className="btn-gradient-primary"
											aria-label="discover events"
										>
											Discover Events
										</Button>
									</div>
								)}
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Profile;
