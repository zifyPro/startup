import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "./projects.css"

export const ProjectsMobile = () => {
	const [t] = useTranslation('global');
	return (
		<>
			<Box
				pt="70px"
				pb="70px"
			    className='projects'
				gap={10}
				fontFamily="Roboto, sans-serif"
				fontWeight="400"
				fontStyle="normal"
				fontSize="15px"
			>
				<Box data-aos="fade-right" mb="20px">
					<img className='imgp'
					src="https://res.cloudinary.com/divxrmzge/image/upload/v1710385042/704shots_so_zi6yed.png" alt="Vortex" />
				</Box>

				<Flex
					direction="column"
					justify="center"
					align="start"
					textAlign="start"
					fontSize="20px"
					ml="10px"
				>
					<Text color="white" fontSize="40px">
						Vortex Gaming
					</Text>
					<Text color="white" w="80%">
						{t('Texto-trabajos.texto-vortex')}
					</Text>
					<Text color="white">{t('Texto-trabajos.texto-prop1')}</Text>
					<Text color="white">{t('Texto-trabajos.texto-prop2')}</Text>
					<Text color="white">{t('Texto-trabajos.texto-prop3')}</Text>
					<Text color="white">{t('Texto-trabajos.texto-prop4')}</Text>
					<Button
						colorScheme="gray"
						my="10px"
						as={Link}
						href="https://pf-final-damian-projects.vercel.app/"
					>
						Ver sitio
					</Button>
				</Flex>

				<Box data-aos="fade-right" mb="20px">
					<img className='imgp'
						src="https://res.cloudinary.com/divxrmzge/image/upload/v1710289714/Imagen_de_WhatsApp_2024-03-12_a_las_20.50.07_349667f0_s5sf99.jpg"
						alt="Bileebob"
					/>
				</Box>
				<Flex
					direction="column"
					justify="center"
					align="start"
					textAlign="start"
					fontSize="20px"
					ml="10px"
				>
					<Text color="white" fontSize="40px">
						Bilee Bob
					</Text>
					<Text color="white">{t('Texto-trabajos.bilee-bob')}</Text>
					<Text color="white">{t('Texto-trabajos.bilee-bob1')}</Text>
					<Text color="white">{t('Texto-trabajos.bilee-bob2')}</Text>
					<Text color="white">{t('Texto-trabajos.bilee-bob3')}</Text>
					<Text color="white">{t('Texto-trabajos.bilee-bob4')}</Text>
					<Text color="white">{t('Texto-trabajos.bilee-bob5')}</Text>
					<Button
						colorScheme="gray"
						my="10px"
						as={Link}
						href="https://billybob-zifypro76-billybob-zifypros-projects.vercel.app/"
					>
						Ver sitio
					</Button>
				</Flex>
			</Box>
		</>
	);
};
