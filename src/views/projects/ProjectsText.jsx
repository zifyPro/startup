import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ProjectsText = () => {
	const [t] = useTranslation('global');
	return (
		<Box color="white" fontSize="70px" pb="30px" bg="#111">
			<Center>
				<Text id="Projects">{t('Texto-trabajos.nuestros-trabajos')}</Text>
			</Center>
		</Box>
	);
};
