import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import CreateEvent from "./pages/CreateEvent";
import EventDetail from "./pages/EventDetail";
import Profile from "./pages/Profile";
import SearchResults from "./pages/SearchResults";
import Events from "./pages/Events";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<div className="min-h-screen flex flex-col">
					<Header />
					<main className="flex-1">
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/events" element={<Events />} />
							<Route path="/create" element={<CreateEvent />} />
							<Route path="/event/:id" element={<EventDetail />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/search" element={<SearchResults />} />
							<Route path="/auth" element={<Auth />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
