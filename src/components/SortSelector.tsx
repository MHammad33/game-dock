import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import type { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

interface SortSelectorProps {}

const SortSelector: FC<SortSelectorProps> = ({}) => {
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					Order by: Relevance
					<BiChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item value="relevance">Relevance</Menu.Item>
						<Menu.Item value="-released">Date Added</Menu.Item>
						<Menu.Item value="name">Name</Menu.Item>
						<Menu.Item value="-released">Release Date</Menu.Item>
						<Menu.Item value="-added">Popularity</Menu.Item>
						<Menu.Item value="-rating">Average Rating</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default SortSelector;
