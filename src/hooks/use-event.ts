import { useQuery } from "@tanstack/react-query";
import { getEvents, getEventById, Event } from "@/lib/events";

export const useEvents = () => {
	return useQuery<Event[]>({
		queryKey: ["events"],
		queryFn: getEvents,
	});
};

export const useEvent = (id: string) => {
	return useQuery<Event | undefined>({
		queryKey: ["events", id],
		queryFn: () => getEventById(id),
		enabled: !!id,
	});
};
