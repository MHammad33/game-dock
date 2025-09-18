import { Button, Menu, Portal } from "@chakra-ui/react";
import type { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

interface SortSelectorProps {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector: FC<SortSelectorProps> = ({
	onSelectSortOrder,
	sortOrder,
}) => {
	const sortOrders = [
		{ value: "relevance", label: "Relevance" },
		{ value: "-added", label: "Date Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];

	const currentSortOrder =
		sortOrders.find((order) => order.value === sortOrder)?.label || "Relevance";

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					Order by: {currentSortOrder}
					<BiChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{sortOrders.map((order) => (
							<Menu.Item
								onClick={() => onSelectSortOrder(order.value)}
								key={order.value}
								value={order.value}
							>
								{order.label}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default SortSelector;
