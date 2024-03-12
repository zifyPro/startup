import {
	Button,
	ButtonGroup,
	Flex,
	Menu,
	Box,
	MenuButton,
	MenuList,
	MenuItem,
	Link,
} from '@chakra-ui/react';
import React from 'react';
import { BiWorld } from 'react-icons/bi';

import { useTranslation } from 'react-i18next';

export const NavbarLarge = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<Box
			textColor="white"
			bg="#111"
			h="60px"
			position="fixed"
			zIndex="1001"
			w="100%"
			fontFamily="Economica, sans-serif"
			fontStyle="normal"
			fontWeight="400"
		>
			<Flex justify="space-around" alignItems="center" h="100%">
				<Menu>
					<img
						src="./logo_blanco.png"
						alt="zifypro"
						width="60px"
						height="60px"
					/>

					<ButtonGroup gap={8}>
						<Button
							fontSize="20px"
							as={Link}
							href="#Home"
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
							fontSize="20px"
							as={Link}
							href="#Projects"
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
							fontSize="20px"
							as={Link}
							href="#Footer"
							variant="link"
							colorScheme="black"
							_hover={{
								transform: 'scale(1.25,1.25)',
								textDecoration: 'underline solid  2px',
							}}
						>
							{t('menu.contacto')}
						</Button>

						<Menu>
							<MenuButton
								fontSize="20px"
								as={Button}
								variant="link"
								colorScheme="black"
								_hover={{
									transform: 'scale(1.4,1.4)',
								}}
							>
								<BiWorld />
							</MenuButton>
							<MenuList bg="#767373" border="1px #767373">
								<MenuItem
									fontSize="20px"
									onClick={() => i18n.changeLanguage('en')}
									bg="#767373"
									border="1px #767373"
									_hover={{ bg: '#767373' }}
								>
									EN
								</MenuItem>
								<MenuItem
									fontSize="20px"
									onClick={() => i18n.changeLanguage('es')}
									bg="#767373"
									border="1px #c3c3c3"
									_hover={{ bg: '#767373' }}
								>
									ES
								</MenuItem>
							</MenuList>
						</Menu>
					</ButtonGroup>
				</Menu>
			</Flex>
		</Box>
	);
};
