import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import type { FC } from "react";

interface GameCardProps {
	game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
	return (
		<Card.Root borderRadius={13} overflow="hidden">
			<Image src={game.background_image} alt={game.name} />
			<Card.Body>
				<Card.Title>{game.name}</Card.Title>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
