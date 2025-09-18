import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import type { FC } from "react";

interface GameHeadingProps {
	gameQuery: GameQuery;
}

const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
	const heading = `
   ${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games
  `;

	return (
		<Heading as={"h1"} marginBottom={7} fontSize={"5xl"}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
