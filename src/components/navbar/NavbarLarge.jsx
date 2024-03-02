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
	Divider,
} from '@chakra-ui/react';
import React from 'react';
import { ImFirefox } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';
import DarkModeSwitch from '../darkModeToggle/DarkModeSwitch';
import { useTranslation } from 'react-i18next';

export const NavbarLarge = () => {
	const [t, i18n] = useTranslation('global');
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
								{t('menu.inicio')}
							</Button>
							<Button
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.25,1.25)',
									textDecoration: 'underline solid  2px',
								}}
							>
								{t('menu.proyectos')}
							</Button>
							<Button
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.25,1.25)',
									textDecoration: 'underline solid  2px',
								}}
							>
								{t('menu.contacto')}
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
									<MenuItem onClick={() => i18n.changeLanguage('en')}>
										EN
									</MenuItem>
									<MenuItem onClick={() => i18n.changeLanguage('es')}>
										ES
									</MenuItem>
								</MenuList>
							</Menu>
						</ButtonGroup>
					</Menu>
				</Flex>
				<Divider />
			</Box>
		</div>
	);
};
