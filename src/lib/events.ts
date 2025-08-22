export interface Event {
	id: string;
	title: string;
	description: string;
	date: string;
	location: string;
	organizer: string;
	rsvpCount: number;
	category: string;
	organizerAvatar?: string;
	attendees?: Array<{
		name: string;
		avatar: string;
	}>;
}

// Mock events data
const eventsData = [
	{
		id: "1",
		title: "Community Garden Festival",
		description:
			"Join us for a celebration of local produce, sustainable living, and community spirit!",
		date: "2024-09-15T14:00:00",
		location: "Riverside Community Garden, 123 Green Street",
		organizer: "Sarah Green",
		organizerAvatar: "",
		rsvpCount: 42,
		category: "Community",
		attendees: [
			{ name: "John D.", avatar: "" },
			{ name: "Maria S.", avatar: "" },
			{ name: "Alex K.", avatar: "" },
			{ name: "Emma W.", avatar: "" },
		],
	},
	{
		id: "2",
		title: "Tech Networking Meetup",
		description:
			"Connect with local tech professionals and entrepreneurs in a relaxed environment.",
		date: "2024-09-20T18:30:00",
		location: "Innovation Hub Downtown",
		organizer: "TechSF Group",
		organizerAvatar: "",
		rsvpCount: 28,
		category: "Professional",
		attendees: [
			{ name: "John D.", avatar: "" },
			{ name: "Maria S.", avatar: "" },
			{ name: "Alex K.", avatar: "" },
			{ name: "Emma W.", avatar: "" },
		],
	},
	{
		id: "3",
		title: "Sunset Yoga Session",
		description:
			"Unwind with a peaceful yoga practice while watching the sunset over the ocean.",
		date: "2024-09-18T18:00:00",
		location: "Ocean Beach",
		organizer: "Mindful Movement",
		organizerAvatar: "",
		rsvpCount: 15,
		category: "Wellness",
		attendees: [
			{ name: "John D.", avatar: "" },
			{ name: "Maria S.", avatar: "" },
			{ name: "Alex K.", avatar: "" },
			{ name: "Emma W.", avatar: "" },
		],
	},
	{
		id: "4",
		title: "Local Art Exhibition",
		description:
			"Discover amazing artwork from talented local artists in our community gallery.",
		date: "2024-09-22T10:00:00",
		location: "Community Arts Center",
		organizer: "Arts Collective",
		organizerAvatar: "",
		rsvpCount: 67,
		category: "Arts",
		attendees: [
			{ name: "John D.", avatar: "" },
			{ name: "Maria S.", avatar: "" },
			{ name: "Alex K.", avatar: "" },
			{ name: "Emma W.", avatar: "" },
		],
	},
	{
		id: "5",
		title: "Food Truck Friday",
		description:
			"Enjoy delicious food from various local food trucks and live entertainment.",
		date: "2024-09-25T17:00:00",
		location: "Central Park Plaza",
		organizer: "City Events",
		organizerAvatar: "",
		rsvpCount: 124,
		category: "Food",
		attendees: [
			{ name: "John D.", avatar: "" },
			{ name: "Maria S.", avatar: "" },
			{ name: "Alex K.", avatar: "" },
			{ name: "Emma W.", avatar: "" },
		],
	},
	{
		id: "6",
		title: "Weekend Hiking Adventure",
		description:
			"Explore beautiful local trails with fellow hiking enthusiasts of all levels.",
		date: "2024-09-28T08:00:00",
		location: "Mountain Trail Head",
		organizer: "Outdoor Club",
		organizerAvatar: "",
		rsvpCount: 35,
		category: "Outdoor",
		attendees: [
			{ name: "John D.", avatar: "" },
			{ name: "Maria S.", avatar: "" },
			{ name: "Alex K.", avatar: "" },
			{ name: "Emma W.", avatar: "" },
		],
	},
];

// Mock API functions
export const getEvents = async (): Promise<Event[]> => {
	// Simulate API delay
	// await new Promise((resolve) => setTimeout(resolve, 1000));
	return eventsData;
};

export const getEventById = async (id: string): Promise<Event | undefined> => {
	await new Promise((resolve) => setTimeout(resolve, 500));
	return eventsData.find((event) => event.id === id);
};
