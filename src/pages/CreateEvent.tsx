import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Type, AlignLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EventCard from "@/components/events/EventCard";

const CreateEvent = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		date: "",
		location: "",
		category: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast({
			title: "Event Created! 🎉",
			description: "Your event has been successfully created and is now live.",
		});

		setIsLoading(false);
		setFormData({
			title: "",
			description: "",
			date: "",
			location: "",
			category: "",
		});
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="container py-8">
			<div className="text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
					Create Your Event
				</h1>
				<p className="text-muted-foreground text-lg">
					Share your amazing event with the community
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
				{/* Form Section */}
				<div>
					<Card className="card-hover">
						<CardHeader>
							<CardTitle className="flex items-center space-x-2">
								<Calendar className="h-5 w-5 text-primary" />
								<span>Event Details</span>
							</CardTitle>
							<CardDescription>
								Fill in the information about your event
							</CardDescription>
						</CardHeader>

						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-2">
									<Label
										htmlFor="title"
										className="flex items-center space-x-2"
									>
										<Type className="h-4 w-4" />
										<span>Event Title</span>
									</Label>
									<Input
										id="title"
										name="title"
										value={formData.title}
										onChange={handleChange}
										placeholder="Enter your event title"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="description"
										className="flex items-center space-x-2"
									>
										<AlignLeft className="h-4 w-4" />
										<span>Description</span>
									</Label>
									<Textarea
										id="description"
										name="description"
										value={formData.description}
										onChange={handleChange}
										placeholder="Describe your event..."
										rows={4}
										required
									/>
								</div>

								<div className="grid grid-cols-1 gap-4">
									<div className="space-y-2">
										<Label
											htmlFor="date"
											className="flex items-center space-x-2"
										>
											<Calendar className="h-4 w-4" />
											<span>Date & Time</span>
										</Label>
										<Input
											id="date"
											name="date"
											type="datetime-local"
											value={formData.date}
											onChange={handleChange}
											required
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="location"
											className="flex items-center space-x-2"
										>
											<MapPin className="h-4 w-4" />
											<span>Location</span>
										</Label>
										<Input
											id="location"
											name="location"
											value={formData.location}
											onChange={handleChange}
											placeholder="Event location"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="category">Category</Label>
									<Input
										id="category"
										name="category"
										value={formData.category}
										onChange={handleChange}
										placeholder="e.g., Music, Food, Sports, Community"
									/>
								</div>

								<div className="flex space-x-4 pt-4">
									<Button
										type="submit"
										className="btn-gradient-secondary flex-1"
										disabled={isLoading}
										aria-label="Create Event"
									>
										{isLoading ? "Creating..." : "Create Event"}
									</Button>
									<Button
										type="button"
										variant="outline"
										className="flex-1"
										onClick={() =>
											setFormData({
												title: "",
												description: "",
												date: "",
												location: "",
												category: "",
											})
										}
										aria-label="create form"
									>
										Clear Form
									</Button>
								</div>
							</form>
						</CardContent>
					</Card>
				</div>

				{/* Preview Section */}
				<div className="lg:sticky lg:top-8 lg:self-start">
					<Card className="card-hover">
						<CardHeader>
							<CardTitle>Live Preview</CardTitle>
							<CardDescription>
								This is how your event will appear to others
							</CardDescription>
						</CardHeader>
						<CardContent>
							{formData.title ? (
								<EventCard
									id="preview"
									title={formData.title}
									description={
										formData.description || "No description provided"
									}
									date={formData.date || new Date().toISOString()}
									location={formData.location || "Location TBD"}
									organizer="You"
									rsvpCount={0}
									category={formData.category}
								/>
							) : (
								<div className="text-center py-12 text-muted-foreground">
									<Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
									<p>Start filling out the form to see your event preview</p>
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;
