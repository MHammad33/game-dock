import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import type { FC } from "react";
import { BiChevronDown } from "react-icons/bi";

interface PlatformSelectorProps {
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector: FC<PlatformSelectorProps> = ({
	onSelectPlatform,
	selectedPlatform,
}) => {
	const { data: platforms, error } = usePlatforms();

	if (error) return null;

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="sm">
					{selectedPlatform?.name || "Platforms"}
					<BiChevronDown />
				</Button>
			</Menu.Trigger>
			<Portal>
				<Menu.Positioner>
					<Menu.Content>
						{platforms.map((platform) => (
							<Menu.Item
								key={platform.id}
								value={platform.name}
								onClick={() => onSelectPlatform(platform)}
							>
								{platform.name}
							</Menu.Item>
						))}
					</Menu.Content>
				</Menu.Positioner>
			</Portal>
		</Menu.Root>
	);
};

export default PlatformSelector;
