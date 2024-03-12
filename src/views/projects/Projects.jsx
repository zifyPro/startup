import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
	const [t] = useTranslation('global');
	return (
		<>
			<Box pt="70px" pb="70px" bg="#02152b">
				<Grid
					templateColumns="1fr 1fr"
					alignItems="center"
					justifyContent="center"
				>
					<GridItem>
						<Flex
							direction="column"
							justify="center"
							align="start"
							textAlign="start"
							fontSize="30px"
							w="80%"
							ml="10%"
						>
							<Text color="white">Vortex Gaming</Text>
							<Text color="white">{t('Texto-trabajos.texto-vortex')}</Text>
							<Text color="white">{t('Texto-trabajos.texto-prop1')}</Text>
							<Text color="white">{t('Texto-trabajos.texto-prop2')}</Text>
							<Text color="white">{t('Texto-trabajos.texto-prop3')}</Text>
							<Text color="white">{t('Texto-trabajos.texto-prop4')}</Text>
							<Button colorScheme="blue" variant="outline">
								Ver sitio
							</Button>
						</Flex>
					</GridItem>
					<GridItem data-aos="fade-left" width="90%">
						<img
							src="https://zifypro-damian-projects.vercel.app/img/vorttex00.jpg"
							alt="Vortex"
						/>
					</GridItem>
				</Grid>
			</Box>
		</>
	);
};
