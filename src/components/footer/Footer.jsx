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

export const Footer = () => {
	return (
		<Box>
			<Center id="Footer" width="100%" mt="20px">
				{/* <Flex direction="row" justify="space-around" width="80%">
					<Box>
						<Text paddingLeft={3}>Te interesa una asesorias gratis?</Text>
						<Flex direction="row" align="center">
							<IconButton variant="ghost" size="md" icon={<FaPhoneAlt />} />
							<Text>+54 9 3813 87-7299 Gabriel</Text>
						</Flex>

						<Flex direction="row" align="center">
							<IconButton variant="ghost" size="md" icon={<FaPhoneAlt />} />
							<Text>+54 9 11 3454-6732 Damian</Text>
						</Flex>

						<Flex direction="row" align="center">
							<IconButton variant="ghost" size="md" icon={<FaPhoneAlt />} />
							<Text>+54 9 11 6191-4453 Christian</Text>
						</Flex>
					</Box>
					<Flex direction="column" alignItems="start" justify="center">
						<Flex
							gap={4}
							flexDirection="row"
							alignItems="center"
							justify="center"
						>
							<IconButton
								as={Link}
								variant="ghost"
								_hover={{ transform: 'scale(1.25)' }}
								size="lg"
								icon={<FaFacebook />}
							/>
							<Text> ZifyPro</Text>
						</Flex>

						<Flex
							gap={4}
							flexDirection="row"
							alignItems="center"
							justify="center"
						>
							<IconButton
								as={Link}
								variant="ghost"
								icon={<FaInstagram />}
								_hover={{ transform: 'scale(1.25)' }}
								size="lg"
							/>
							<Text> ZifyPro01</Text>
						</Flex>
						<Flex
							gap={4}
							flexDirection="row"
							alignItems="center"
							justify="center"
						>
							<IconButton
								as={Link}
								variant="ghost"
								_hover={{ transform: 'scale(1.25)' }}
								size="lg"
								icon={<FaLinkedin />}
							/>
							<Text> ZifyPro</Text>
						</Flex>

						<Flex
							gap={4}
							flexDirection="row"
							alignItems="center"
							justify="center"
						>
							<IconButton
								as={Link}
								variant="ghost"
								_hover={{ transform: 'scale(1.25)' }}
								size="lg"
								icon={<SiGmail />}
							/>
							<Text> ZifyPro@gmail.com</Text>
						</Flex>
					</Flex>

					<Flex direction="column">
						<Flex direction="row" alignItems="center" justify="center">
							<IconButton
								as={Link}
								variant="ghost"
								_hover={{ transform: 'scale(1.25)' }}
								size="lg"
								icon={<FaLocationDot />}
							/>
							<Text>Buenos Aires - Argentina</Text>
						</Flex>
					</Flex>
				</Flex> */}
				<Flex gap={2} direction="column" justify="center" align="center">
					<Text paddingLeft={3}>Te interesa una asesorias gratis?</Text>
					<Flex direction="row" align="center" w="250px">
						<IconButton variant="link" size="md" icon={<FaPhoneAlt />} />
						<Text>+54 9 3813 87-7299 Gabriel</Text>
					</Flex>
					<Flex direction="row" align="center" w="250px">
						<IconButton variant="link" size="md" icon={<FaLocationDot />} />
						<Text>Buenos Aires - Argentina</Text>
					</Flex>

					<Flex>
						<IconButton
							as={Link}
							variant="ghost"
							_hover={{ transform: 'scale(1.25)' }}
							size="lg"
							icon={<FaFacebook />}
						/>
						<IconButton
							as={Link}
							variant="ghost"
							icon={<FaInstagram />}
							_hover={{ transform: 'scale(1.25)' }}
							size="lg"
						/>
						<IconButton
							as={Link}
							variant="ghost"
							_hover={{ transform: 'scale(1.25)' }}
							size="lg"
							icon={<FaLinkedin />}
						/>
						<IconButton
							as={Link}
							variant="ghost"
							_hover={{ transform: 'scale(1.25)' }}
							size="lg"
							icon={<SiGmail />}
						/>
					</Flex>
				</Flex>
			</Center>
		</Box>
	);
};
