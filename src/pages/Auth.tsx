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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
	const [loginData, setLoginData] = useState({ email: "", password: "" });
	const [registerData, setRegisterData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast({
			title: "Welcome back! 👋",
			description: "You have successfully logged in.",
		});

		setIsLoading(false);
	};

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();

		if (registerData.password !== registerData.confirmPassword) {
			toast({
				title: "Error",
				description: "Passwords do not match.",
				variant: "destructive",
			});
			return;
		}

		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast({
			title: "Account created! 🎉",
			description: "Welcome to Event-Hub! You can now create and join events.",
		});

		setIsLoading(false);
	};

	return (
		<div className="container py-16">
			<div className="max-w-md mx-auto">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center mb-4">
						<Calendar className="h-12 w-12 text-primary" />
					</div>
					<h1 className="text-3xl font-poppins font-bold mb-2">
						Welcome to EventHub
					</h1>
					<p className="text-muted-foreground">
						Join our community of event organizers and attendees
					</p>
				</div>

				<Tabs defaultValue="login" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="login">Sign In</TabsTrigger>
						<TabsTrigger value="register">Sign Up</TabsTrigger>
					</TabsList>

					<TabsContent value="login">
						<Card>
							<CardHeader>
								<CardTitle>Sign In</CardTitle>
								<CardDescription>
									Enter your credentials to access your account
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleLogin} className="space-y-4">
									<div className="space-y-2">
										<Label
											htmlFor="login-email"
											className="flex items-center space-x-2"
										>
											<Mail className="h-4 w-4" />
											<span>Email</span>
										</Label>
										<Input
											id="login-email"
											type="email"
											value={loginData.email}
											onChange={(e) =>
												setLoginData((prev) => ({
													...prev,
													email: e.target.value,
												}))
											}
											placeholder="Enter your email"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="login-password"
											className="flex items-center space-x-2"
										>
											<Lock className="h-4 w-4" />
											<span>Password</span>
										</Label>
										<Input
											id="login-password"
											type="password"
											value={loginData.password}
											onChange={(e) =>
												setLoginData((prev) => ({
													...prev,
													password: e.target.value,
												}))
											}
											placeholder="Enter your password"
											required
										/>
									</div>

									<Button
										type="submit"
										className="btn-gradient-secondary w-full"
										disabled={isLoading}
										aria-label="Sign in"
									>
										{isLoading ? "Signing In..." : "Sign In"}
									</Button>
								</form>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="register">
						<Card>
							<CardHeader>
								<CardTitle>Create Account</CardTitle>
								<CardDescription>
									Join Event-Hub and start organizing amazing events
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleRegister} className="space-y-4">
									<div className="space-y-2">
										<Label
											htmlFor="register-name"
											className="flex items-center space-x-2"
										>
											<User className="h-4 w-4" />
											<span>Full Name</span>
										</Label>
										<Input
											id="register-name"
											type="text"
											value={registerData.name}
											onChange={(e) =>
												setRegisterData((prev) => ({
													...prev,
													name: e.target.value,
												}))
											}
											placeholder="Enter your full name"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="register-email"
											className="flex items-center space-x-2"
										>
											<Mail className="h-4 w-4" />
											<span>Email</span>
										</Label>
										<Input
											id="register-email"
											type="email"
											value={registerData.email}
											onChange={(e) =>
												setRegisterData((prev) => ({
													...prev,
													email: e.target.value,
												}))
											}
											placeholder="Enter your email"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="register-password"
											className="flex items-center space-x-2"
										>
											<Lock className="h-4 w-4" />
											<span>Password</span>
										</Label>
										<Input
											id="register-password"
											type="password"
											value={registerData.password}
											onChange={(e) =>
												setRegisterData((prev) => ({
													...prev,
													password: e.target.value,
												}))
											}
											placeholder="Create a password"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label
											htmlFor="register-confirm"
											className="flex items-center space-x-2"
										>
											<Lock className="h-4 w-4" />
											<span>Confirm Password</span>
										</Label>
										<Input
											id="register-confirm"
											type="password"
											value={registerData.confirmPassword}
											onChange={(e) =>
												setRegisterData((prev) => ({
													...prev,
													confirmPassword: e.target.value,
												}))
											}
											placeholder="Confirm your password"
											required
										/>
									</div>

									<Button
										type="submit"
										className="btn-gradient-secondary w-full"
										disabled={isLoading}
										aria-label="Create Account"
									>
										{isLoading ? "Creating Account..." : "Create Account"}
									</Button>
								</form>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Auth;
