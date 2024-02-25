import {
	Button,
	ButtonGroup,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { ImFirefox } from 'react-icons/im';
import DarkModeSwitch from '../darkModeToggle/DarkModeSwitch';
import { BiWorld } from 'react-icons/bi';
import { CiMenuBurger } from 'react-icons/ci';
export const NavbarMobile = () => {
	return (
		<>
			<Flex justify="space-between" alignItems="center">
				<Menu>
					<ButtonGroup alignItems="center">
						<Text fontSize="2xl">ZiFyPro</Text>
						<ImFirefox />
					</ButtonGroup>
					<ButtonGroup>
						<Button
							variant="link"
							colorScheme="black"
							_hover={{
								transform: 'scale(1.4,1.4)',
							}}
						>
							<DarkModeSwitch />
						</Button>
						<Menu>
							<MenuButton
								as={Button}
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.4,1.4)',
								}}
							>
								<BiWorld />
							</MenuButton>
							<MenuList>
								<MenuItem>EN</MenuItem>
								<MenuItem>ES</MenuItem>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton as={Button} variant="link" colorScheme="black">
								<CiMenuBurger />
							</MenuButton>
							<MenuList>
								<MenuItem>Inicio</MenuItem>
								<MenuItem>Proyectos</MenuItem>
								<MenuItem>Contactanos</MenuItem>
							</MenuList>
						</Menu>
					</ButtonGroup>
				</Menu>
			</Flex>
		</>
	);
};
