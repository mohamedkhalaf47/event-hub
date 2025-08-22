import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import EventCard from "@/components/events/EventCard";

const SearchResults = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
	const [sortBy, setSortBy] = useState("date");
	const [filterCategory, setFilterCategory] = useState("all");
	const [hasSearched, setHasSearched] = useState(false);

	// Mock search results
	const mockResults = [
		{
			id: "1",
			title: "Community Garden Festival",
			description: "A celebration of local produce and sustainable living",
			date: "2024-09-15T14:00:00",
			location: "Riverside Community Garden",
			organizer: "Sarah Green",
			rsvpCount: 42,
			category: "Community",
		},
		{
			id: "2",
			title: "Tech Networking Meetup",
			description: "Connect with local tech professionals and entrepreneurs",
			date: "2024-09-20T18:30:00",
			location: "Innovation Hub Downtown",
			organizer: "TechSF Group",
			rsvpCount: 28,
			category: "Professional",
		},
		{
			id: "3",
			title: "Sunset Yoga Session",
			description: "Relaxing yoga practice with beautiful sunset views",
			date: "2024-09-18T18:00:00",
			location: "Ocean Beach",
			organizer: "Mindful Movement",
			rsvpCount: 15,
			category: "Wellness",
		},
	];

	const [filteredResults, setFilteredResults] = useState(mockResults);

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		setSearchParams({ q: searchQuery });

		// Filter results based on search query
		const filtered = mockResults.filter(
			(event) =>
				event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				event.location.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredResults(filtered);
		setHasSearched(true);
	};

	const handleSortChange = (value: string) => {
		setSortBy(value);
		const sorted = [...filteredResults].sort((a, b) => {
			switch (value) {
				case "date":
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				case "popularity":
					return b.rsvpCount - a.rsvpCount;
				case "alphabetical":
					return a.title.localeCompare(b.title);
				default:
					return 0;
			}
		});
		setFilteredResults(sorted);
	};

	const handleFilterChange = (value: string) => {
		setFilterCategory(value);
		if (value === "all") {
			setFilteredResults(mockResults);
		} else {
			const filtered = mockResults.filter(
				(event) => event.category.toLowerCase() === value.toLowerCase()
			);
			setFilteredResults(filtered);
		}
	};

	const handleClear = () => {
		setSearchQuery("");
		setFilteredResults(mockResults);
		setSearchParams({});
		setHasSearched(false);
	};

	useEffect(() => {
		const q = searchParams.get("q");
		if (q) {
			setSearchQuery(q);
			const filtered = mockResults.filter(
				(event) =>
					event.title.toLowerCase().includes(q.toLowerCase()) ||
					event.description.toLowerCase().includes(q.toLowerCase()) ||
					event.location.toLowerCase().includes(q.toLowerCase())
			);
			setFilteredResults(filtered);
			setHasSearched(true);
		}
	}, [searchParams]);

	const categories = [
		"all",
		"community",
		"professional",
		"wellness",
		"music",
		"sports",
	];

	return (
		<div className="container py-8">
			<div className="max-w-6xl mx-auto">
				{/* Search Header */}
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
						Search Events
					</h1>
					<p className="text-muted-foreground text-lg">
						Discover amazing events in your community
					</p>
				</div>

				{/* Search Bar */}
				<form onSubmit={handleSearch} className="mb-6">
					<div className="flex flex-col md:flex-row gap-4">
						<div className="flex-1 relative">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
							<Input
								placeholder="Search events by name, description, or location"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10"
							/>
						</div>
						<Button type="submit" className="btn-gradient-primary" aria-label="Search">
							<Search className="h-4 w-4 mr-2" />
							Search
						</Button>
					</div>
				</form>

				{/* Filters */}
				<div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
					<div className="flex items-center space-x-2">
						<SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
						<span className="text-sm font-medium">Filters:</span>
					</div>

					<div className="flex flex-1 gap-4">
						<Select value={sortBy} onValueChange={handleSortChange}>
							<SelectTrigger className="w-full sm:w-48">
								<SelectValue placeholder="Sort by..." />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="date">Sort by Date</SelectItem>
								<SelectItem value="popularity">Sort by Popularity</SelectItem>
								<SelectItem value="alphabetical">
									Sort Alphabetically
								</SelectItem>
							</SelectContent>
						</Select>

						<Select value={filterCategory} onValueChange={handleFilterChange}>
							<SelectTrigger className="w-full sm:w-48">
								<SelectValue placeholder="All Categories" />
							</SelectTrigger>
							<SelectContent>
								{categories.map((category) => (
									<SelectItem key={category} value={category}>
										{category === "all"
											? "All Categories"
											: category.charAt(0).toUpperCase() + category.slice(1)}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* Results */}
				{hasSearched && searchQuery && (
					<div className="mb-6">
						<h2 className="text-lg font-medium mb-2">
							Search Results for "{searchQuery}"
						</h2>
						<p className="text-muted-foreground">
							Found {filteredResults.length}{" "}
							{filteredResults.length === 1 ? "event" : "events"}
						</p>
						<Button
							onClick={handleClear}
							className="mt-3 text-md hover:bg-red-600 hover:text-white"
							size="sm"
							variant="outline"
							aria-label="Clear Search"
						>
							Clear Search
						</Button>
					</div>
				)}

				{/* Results Grid */}
				{filteredResults.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredResults.map((event) => (
							<EventCard key={event.id} {...event} />
						))}
					</div>
				) : (
					<Alert className="max-w-md mx-auto">
						<Search className="h-4 w-4" />
						<AlertDescription>
							{searchQuery ? (
								<>
									No events found matching "{searchQuery}". Try adjusting your
									search terms or filters.
								</>
							) : (
								"Enter a search term to find events in your area."
							)}
						</AlertDescription>
					</Alert>
				)}

				{/* Load More */}
				{filteredResults.length > 0 && (
					<div className="text-center mt-8">
						<Button variant="outline" size="lg" aria-label="Load Events">
							Load More Events
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default SearchResults;
