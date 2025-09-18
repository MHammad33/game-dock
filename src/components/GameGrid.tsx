import useGames from "@/hooks/useGames";
import type { Genre } from "@/hooks/useGenres";
import { SimpleGrid, Text } from "@chakra-ui/react";
import type { FC } from "react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
	selectedGenre: Genre | null;
}

const GameGrid: FC<GameGridProps> = ({ selectedGenre }) => {
	const { data: games, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5];

	return (
		<>
			<Text>{error && <div>{error}</div>}</Text>
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 4,
					"2xl": 5,
				}}
				gap={5}
			>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}

				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
