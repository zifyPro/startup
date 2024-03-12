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
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<Box
				width="100%"
				textColor="white"
				id="Home"
				fontFamily="Economica, sans-serif"
				fontWeight="700"
				fontStyle="italic"
				fontSize="20px"
				mb="400px"
			>
				<Center>
					<Grid
						templateColumns="1fr 1fr"
						alignItems="center"
						justifyContent="center"
					>
						<GridItem data-aos="fade-right">
							<Flex>
								<Image src="./logo_blanco.png" boxSize="700px" />
							</Flex>
						</GridItem>
						<GridItem data-aos="fade-left">
							<Tabs variant="soft-rounded" colorScheme="gray" width="600px">
								<TabList textColor="white" fontSize="30px">
									<Tab fontSize="25px" textColor="white">
										{t('home.quienes-somos')}{' '}
									</Tab>
									<Tab fontSize="25px" textColor="white">
										{t('home.porque-elegirnos')}
									</Tab>
									<Tab fontSize="25px" textColor="white">
										{t('home.nuestro-equipo')}
									</Tab>
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
