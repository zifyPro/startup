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
	Link,
} from '@chakra-ui/react';
import React from 'react';
import { ImFirefox } from 'react-icons/im';
import { BiWorld } from 'react-icons/bi';

import { useTranslation } from 'react-i18next';

export const NavbarLarge = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<div>
			<Box>
				<Flex justify="space-around" alignItems="center">
					<Menu>
						<ButtonGroup alignItems="center">
							<img
								src="./logo_blanco.png"
								alt="zifypro"
								width="30px"
								height="30px"
							/>
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
