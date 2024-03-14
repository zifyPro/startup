import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ProjectsText = () => {
	const [t] = useTranslation('global');
	return (
		<Box
			color="white"
			fontSize="50px"
			py="30px"
			bg="#111"
			fontFamily="Roboto mono, monospace"
			fontWeight="300"
			fontStyle="italic"
		>
			<Center>
				<Text id="Projects" textAlign="center">
					{t('Texto-trabajos.nuestros-trabajos')}
				</Text>
			</Center>
		</Box>
	);
};
