import type { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { FC } from "react";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface PlatformIconListProps {
	platforms: Platform[];
}

const PlatformIconList: FC<PlatformIconListProps> = ({ platforms }) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					as={iconMap[platform.slug]}
					color={"gray.500"}
				/>
			))}
		</HStack>
	);
};

export default PlatformIconList;
