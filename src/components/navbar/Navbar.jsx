import { useMediaQuery } from '@chakra-ui/react';
import { NavbarLarge } from './NavbarLarge';
import { NavbarMobile } from './NavbarMobile';
export const Navbar = () => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

	return <>{isLargerThan800 ? <NavbarLarge /> : <NavbarMobile />}</>;
};
