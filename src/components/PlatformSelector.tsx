import usePlatforms from "@/hooks/usePlatforms";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import type { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

interface PlatformSelectorProps {}

const PlatformSelector: FC<PlatformSelectorProps> = ({}) => {
	const { data: platforms, isLoading, error } = usePlatforms();

	if (error) return null;

	return (
		<Box marginBottom={3}>
			<Menu.Root>
				<Menu.Trigger asChild>
					<Button variant="outline" size="sm">
						Platforms <BiChevronDown />
					</Button>
				</Menu.Trigger>
				<Portal>
					<Menu.Positioner>
						<Menu.Content>
							{platforms.map((platform) => (
								<Menu.Item key={platform.id} value={platform.name}>
									{platform.name}
								</Menu.Item>
							))}
						</Menu.Content>
					</Menu.Positioner>
				</Portal>
			</Menu.Root>
		</Box>
	);
};

export default PlatformSelector;
