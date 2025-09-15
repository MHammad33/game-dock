import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = ({}) => {
	const { games, error } = useGames();

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
