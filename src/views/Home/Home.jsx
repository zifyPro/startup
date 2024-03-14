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
	useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomeMobile } from './HomeMobile';

export const Home = () => {
	const [t, i18n] = useTranslation('global');
	const [isLargerThan950] = useMediaQuery('(min-width: 950px)');
	return (
		<>
			{isLargerThan950 ? (
				<Box
					width="100%"
					textColor="white"
					id="Home"
					fontFamily="Roboto, sans-serif"
					fontWeight="400"
					fontStyle="normal"
					pt="60px"
					mb="200px"
				>
					<Center alignItems="center">
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
										<Tab fontSize="24px" textColor="white">
											{t('home.quienes-somos')}{' '}
										</Tab>
										<Tab fontSize="25px" textColor="white">
											{t('home.porque-elegirnos')}
										</Tab>
										<Tab fontSize="25px" textColor="white">
											{t('home.nuestro-equipo')}
										</Tab>
									</TabList>
									<TabPanels>
										<TabPanel>
											<Text
												font-family="Raleway, sans-serif"
												font-weight="400"
												font-style="normal"
											>
												{t('home.texto-uno')}
											</Text>
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
			) : (
				<HomeMobile />
			)}
		</>
	);
};
