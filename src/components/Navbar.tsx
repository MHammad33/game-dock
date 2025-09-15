import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
	return (
		<HStack justifyContent="space-between" padding="8px">
			<Image src={logo} boxSize="70px" />
			<ColorModeButton />
		</HStack>
	);
};

export default Navbar;
