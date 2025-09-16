import { Badge } from "@chakra-ui/react";
import type { FC } from "react";

interface CriticScoreProps {
	score: number;
}

const CriticScore: FC<CriticScoreProps> = ({ score }) => {
	let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

	return (
		<Badge fontSize={14} paddingX={2} borderRadius={4} colorPalette={color}>
			{score}
		</Badge>
	);
};

export default CriticScore;
