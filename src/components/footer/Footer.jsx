import React from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Center,
	Flex,
	IconButton,
	Link,
	Text,
} from '@chakra-ui/react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaPhoneAlt,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaLocationDot } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const [t] = useTranslation('global');
	return (
		<Box textColor="white" bg="#111" pt={12} id="Footer">
			<Center width="100%">
				<Flex gap={2} direction="column" justify="center" align="center">
					<Text paddingLeft={3}>{t('footer.asesoria')}</Text>
					<Flex direction="row" align="center" w="250px">
						<IconButton
							variant="link"
							size="md"
							icon={<FaPhoneAlt />}
							color="white"
						/>
						<Text>+54 9 3813 87-7299 Gabriel</Text>
					</Flex>
					<Flex direction="row" align="center" w="250px">
						<IconButton
							variant="link"
							size="md"
							icon={<FaPhoneAlt />}
							color="white"
						/>
						<Text>+54 9 11 3454-6732 Damian</Text>
					</Flex>
					<Flex direction="row" align="center" w="250px">
						<IconButton
							variant="link"
							size="md"
							icon={<FaLocationDot />}
							color="white"
						/>
						<Text>Buenos Aires - Argentina</Text>
					</Flex>

					<Flex>
						<IconButton
							as={Link}
							variant="ghost"
							_hover={{ transform: 'scale(1.4)' }}
							size="lg"
							color="white"
							icon={<FaFacebook />}
						/>
						<IconButton
							as={Link}
							href="https://www.instagram.com/zifypro_01/"
							color="white"
							variant="ghost"
							icon={<FaInstagram />}
							_hover={{ transform: 'scale(1.4)' }}
							size="lg"
						/>
						<IconButton
							as={Link}
							color="white"
							variant="ghost"
							_hover={{ transform: 'scale(1.4)' }}
							size="lg"
							icon={<FaLinkedin />}
						/>
						<IconButton
							as={Link}
							color="white"
							variant="ghost"
							_hover={{ transform: 'scale(1.4)' }}
							size="lg"
							href="mailTo:zifypro76@gmail.com"
							icon={<SiGmail />}
						/>
					</Flex>
				</Flex>
			</Center>
		</Box>
	);
};
