import { Button, ButtonGroup, Flex, Menu, Box } from '@chakra-ui/react';
import React from 'react';
import { ImFirefox } from 'react-icons/im';
import { MdDarkMode } from 'react-icons/md';
export const Navbar = () => {
	return (
		<>
			<Box>
				<Flex justify="space-around">
					<Menu>
						<ButtonGroup>
							<ImFirefox />
						</ButtonGroup>
						<ButtonGroup>
							<Button variant="ghost">Inicio</Button>
							<Button variant="ghost">Proyectos</Button>
							<Button variant="ghost">Contactanos</Button>
							<Button variant="ghost">
								<MdDarkMode />
							</Button>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
