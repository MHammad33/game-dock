import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const GameGrid = ({}) => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const response = await apiClient.get<FetchGamesResponse>("/games");
				setGames(response.data.results);
			} catch (error) {
				setError("Failed to fetch games");
			}
		};

		fetchGames();

		return () => {
			setGames([]);
			setError(null);
		};
	}, []);

	return (
		<>
			<Text>{error && <div>{error}</div>}</Text>
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
