import {
	Button,
	ButtonGroup,
	Flex,
	Menu,
	Box,
	Text,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { ImFirefox } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';
import DarkModeSwitch from '../darkModeToggle/DarkModeSwitch';
export const NavbarLarge = () => {
	return (
		<div>
			<Box>
				<Flex justify="space-around" alignItems="center">
					<Menu>
						<ButtonGroup alignItems="center">
							<Text fontSize="3xl">ZiFyPro</Text>
							<ImFirefox />
						</ButtonGroup>
						<ButtonGroup gap={8}>
							<Button
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.25,1.25)',
									textDecoration: 'underline solid  2px',
								}}
							>
								Inicio
							</Button>
							<Button
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.25,1.25)',
									textDecoration: 'underline solid  2px',
								}}
							>
								Proyectos
							</Button>
							<Button
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.25,1.25)',
									textDecoration: 'underline solid  2px',
								}}
							>
								Contactanos
							</Button>
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
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</div>
	);
};
