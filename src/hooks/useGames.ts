import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const fetchGames = async () => {
			try {
				const response = await apiClient.get<FetchGamesResponse>("/games", {
					signal: controller.signal,
				});
				setGames(response.data.results);
			} catch (error) {
				if (error instanceof CanceledError) return;
				setError("Failed to fetch games");
				console.error(error);
			}
		};

		fetchGames();

		return () => controller.abort();
	}, []);

	return { games, error };
};

export default useGames;
