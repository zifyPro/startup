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
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomeMobile = () => {
	const [t, i18n] = useTranslation('global');
	return (
		<>
			<Box
				width="100%"
				textColor="white"
				id="Home"
				fontFamily="Roboto, sans-serif"
				fontWeight="400"
				fontStyle="normal"
				fontSize="25px"
				pt="60px"
			>
				<Center alignItems="center">
					<Grid
						templateRows="1fr 1fr"
						alignItems="center"
						justifyContent="center"
						ml="10px"
					>
						<GridItem data-aos="fade-right">
							<Flex justify="center">
								<Image src="./logo_blanco.png" boxSize="300px" />
							</Flex>
						</GridItem>
						<GridItem>
							<Tabs
								variant="soft-rounded"
								colorScheme="red"
								width="auto"
								fontSize="18px"
							>
								<TabList textColor="white">
									<Tab textColor="white">{t('home.quienes-somos')} </Tab>
									<Tab textColor="white">{t('home.porque-elegirnos')}</Tab>
									<Tab textColor="white">{t('home.nuestro-equipo')}</Tab>
								</TabList>
								<TabPanels>
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
