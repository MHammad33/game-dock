import { Box } from "@chakra-ui/react";
import type { FC } from "react";

interface GameCardContainerProps {
	children: React.ReactNode;
}

const GameCardContainer: FC<GameCardContainerProps> = ({ children }) => {
	return (
		<Box width="300px" borderRadius={13} overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;
