import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);

		const fetchGames = async () => {
			try {
				const response = await apiClient.get<FetchGamesResponse>("/games", {
					signal: controller.signal,
				});
				setGames(response.data.results);
				setIsLoading(false);
			} catch (error) {
				if (error instanceof CanceledError) return;
				setError("Failed to fetch games");
				console.error(error);
				setIsLoading(false);
			}
		};

		fetchGames();

		return () => controller.abort();
	}, []);

	return { games, error, isLoading };
};

export default useGames;
