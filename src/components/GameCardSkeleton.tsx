import { Card, Skeleton } from "@chakra-ui/react";
import type { FC } from "react";

interface GameCardSkeletonProps {}

const GameCardSkeleton: FC<GameCardSkeletonProps> = ({}) => {
	return (
		<Card.Root>
			<Skeleton height="200px" />
			<Card.Body>
				<Skeleton height="20px" mb="10px" />
				<Skeleton height="20px" width="50%" />
			</Card.Body>
		</Card.Root>
	);
};

export default GameCardSkeleton;
