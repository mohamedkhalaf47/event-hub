import { User, Calendar, Home, Menu, Grid3X3, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex justify-between h-16 items-center">
				<Link to="/" className="flex items-center space-x-2">
					<Calendar className="h-8 w-8 text-primary" />
					<span className="md:text-2xl text-lg font-poppins font-bold text-primary">
						EventHub
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center justify-between gap-12">
					<Link to="/">
						<Button
							variant="ghost"
							className={`flex items-center space-x-2 ${
								isActive("/") ? "text-primary bg-primary/10" : ""
							}`}
							aria-label="Home"
						>
							<Home className="h-4 w-4" />
							<span>Home</span>
						</Button>
					</Link>

					<Link to="/events">
						<Button
							variant="ghost"
							className={`flex items-center space-x-2 ${
								isActive("/events") ? "text-primary bg-primary/10" : ""
							}`}
							aria-label="Events"
						>
							<Grid3X3 className="h-4 w-4" />
							<span>Events</span>
						</Button>
					</Link>

					<Link to="/create">
						<Button
							variant="ghost"
							className={`flex items-center space-x-2 ${
								isActive("/create") ? "text-primary bg-primary/10" : ""
							}`}
							aria-label="Create Event"
						>
							<Calendar className="h-4 w-4" />
							<span>Create Event</span>
						</Button>
					</Link>
				</div>
				<div className="hidden md:flex">
					{isLoggedIn ? (
						<Link to="/auth">
							<Button className="btn-gradient-secondary" aria-label="Sign-in">
								Sign In
							</Button>
						</Link>
					) : (
						<div className="flex items-center gap-2">
							<Button
								variant="ghost"
								size="lg"
								className="p-2 w-8 h-8"
								aria-label="Logout"
								onClick={() => setIsLoggedIn(true)}
							>
								<LogOut />
							</Button>
							<Link to="/profile">
								<Button
									variant="ghost"
									size="sm"
									className="p-2"
									aria-label="Profile"
								>
									<Avatar className="h-8 w-8">
										<AvatarFallback className="bg-primary/10 text-primary">
											<User className="h-4 w-4" />
										</AvatarFallback>
									</Avatar>
								</Button>
							</Link>
						</div>
					)}
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden ml-auto flex items-center space-x-2">
					{isLoggedIn ? (
						<Link to="/auth">
							<Button className="btn-gradient-secondary" aria-label="Sign in">
								Sign In
							</Button>
						</Link>
					) : (
						<div className="flex items-center gap-2">
							<Button
								variant="ghost"
								size="lg"
								className="p-2 h-8 w-8"
								aria-label="Logout"
								onClick={() => setIsLoggedIn(true)}
							>
								<LogOut />
							</Button>
							<Link to="/profile">
								<Button
									variant="ghost"
									size="sm"
									className="p-2"
									aria-label="Profile"
								>
									<Avatar className="h-8 w-8">
										<AvatarFallback className="bg-primary/10 text-primary">
											<User className="h-4 w-4" />
										</AvatarFallback>
									</Avatar>
								</Button>
							</Link>
						</div>
					)}

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="sm"
								className="p-2"
								aria-label="menu"
							>
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-80">
							<div className="flex flex-col space-y-4 pt-8">
								{/* Mobile Links */}
								<div className="flex flex-col space-y-2">
									<Link to="/">
										<Button
											variant="ghost"
											className={`w-full justify-start space-x-2 ${
												isActive("/") ? "text-primary bg-primary/10" : ""
											}`}
											aria-label="home"
										>
											<Home className="h-4 w-4" />
											<span>Home</span>
										</Button>
									</Link>

									<Link to="/events">
										<Button
											variant="ghost"
											className={`w-full justify-start space-x-2 ${
												isActive("/events") ? "text-primary bg-primary/10" : ""
											}`}
											aria-label="events"
										>
											<Grid3X3 className="h-4 w-4" />
											<span>Events</span>
										</Button>
									</Link>

									<Link to="/create">
										<Button
											variant="ghost"
											className={`w-full justify-start space-x-2 ${
												isActive("/create") ? "text-primary bg-primary/10" : ""
											}`}
											aria-label="create event"
										>
											<Calendar className="h-4 w-4" />
											<span>Create Event</span>
										</Button>
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
};

export default Header;
