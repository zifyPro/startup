import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<Box width="100%">
				<Center>
					<Grid
						templateColumns="1fr 1fr"
						alignItems="center"
						justifyContent="center"
					>
						<GridItem>
							<Flex justifyContent="center">
								<Image src="./logo_blanco.png" height="500px" />
							</Flex>
						</GridItem>
						<GridItem>
							<Tabs variant="soft-rounded" colorScheme="green" width="600px">
								<TabList>
									<Tab>{t('home.quienes-somos')}</Tab>
									<Tab>{t('home.porque-elegirnos')}</Tab>
									<Tab>{t('home.nuestro-equipo')}</Tab>
								</TabList>
								<TabPanels height="180px">
									<TabPanel>
										<p>{t('home.texto-uno')}</p>
									</TabPanel>
									<TabPanel>
										<p>{t('home.texto-dos')}</p>
									</TabPanel>
									<TabPanel>
										<p>{t('home.texto-tres')}</p>
									</TabPanel>
								</TabPanels>
							</Tabs>
						</GridItem>
					</Grid>
				</Center>
			</Box>
		</>
	);
};
