import {
	Button,
	ButtonGroup,
	Flex,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { CiMenuBurger } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';
export const NavbarMobile = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<Flex
				justify="space-between"
				alignItems="center"
				bg="#111"
				textColor="white"
				h="60px"
				position="fixed"
				zIndex="1001"
				w="100%"
				fontFamily="Roboto, sans-serif"
				fontWeight="400"
				fontStyle="normal"
			>
				<Menu>
					<ButtonGroup alignItems="center" as={Link} href="#Home">
						<img
							src="./logo_blanco.png"
							alt="zifypro"
							width="60px"
							height="60px"
						/>
					</ButtonGroup>
					<ButtonGroup>
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
									onClick={() => i18n.changeLanguage('es')}
									fontSize="20px"
									bg="#767373"
									border="1px #c3c3c3"
									_hover={{ bg: '#767373' }}
								>
									ES
								</MenuItem>
							</MenuList>
						</Menu>
						<Menu>
							<MenuButton as={Button} variant="link" colorScheme="black">
								<CiMenuBurger />
							</MenuButton>
							<MenuList bg="#767373" border="1px #767373">
								<MenuItem
									as={Link}
									href="#Home"
									fontSize="20px"
									bg="#767373"
									border="1px #c3c3c3"
									_hover={{ bg: '#767373' }}
								>
									{t('menu.inicio')}
								</MenuItem>
								<MenuItem
									as={Link}
									href="#Projects"
									fontSize="20px"
									bg="#767373"
									border="1px #c3c3c3"
									_hover={{ bg: '#767373' }}
								>
									{t('menu.proyectos')}
								</MenuItem>
								<MenuItem
									as={Link}
									href="#Footer"
									fontSize="20px"
									bg="#767373"
									border="1px #c3c3c3"
									_hover={{ bg: '#767373' }}
								>
									{t('menu.contacto')}
								</MenuItem>
							</MenuList>
						</Menu>
					</ButtonGroup>
				</Menu>
			</Flex>
		</>
	);
};
