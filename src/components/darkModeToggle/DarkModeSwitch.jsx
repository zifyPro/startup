// DarkModeSwitch.js

import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
function DarkModeSwitch() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			variant="link"
			colorScheme="dark"
			onClick={toggleColorMode}
			icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
		/>
	);
}

export default DarkModeSwitch;
