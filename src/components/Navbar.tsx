import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import type { FC } from "react";

interface NavbarProps {
	onSearch: (searchText: string) => void;
}

const Navbar: FC<NavbarProps> = ({ onSearch }) => {
	return (
		<HStack justifyContent="space-between" padding="8px">
			<Image src={logo} boxSize="70px" />
			<SearchInput onSearch={(searchText) => onSearch(searchText)} />
			<ColorModeButton />
		</HStack>
	);
};

export default Navbar;
