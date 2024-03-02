import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Text,
} from '@chakra-ui/react';
import React from 'react';

export const Home = () => {
	return (
		<>
			<Box width="100%">
				<Center>
					<Flex direction="column" width="65%" alignItems="center">
						<Image
							src="https://zifypro-damian-projects.vercel.app/logo.png"
							height="500px"
							width="400px"
						/>
						<Flex direction="row" justify="center" gap={8}>
							<Box>
								<Text fontSize="4xl" textAlign="center">
									¿Quiénes somos?
								</Text>
								<Text textAlign="justify">
									En ZifyPro hacemos de tus ideas una realidad. Somos un equipo
									apasionado de desarrolladores Full Stack dedicados a
									transformar conceptos en experiencias digitales impactantes.
									Nos especializamos en el desarrollo web y diseño
									personalizado, ofreciendo soluciones innovadoras que se
									destacan en la creación de páginas web únicas y funcionales.
								</Text>
							</Box>
							<Box>
								<Text fontSize="4xl" textAlign="center">
									¿Por qué elegirnos?
								</Text>
								<Text textAlign="justify">
									En ZifyPro destacamos como expertos en desarrollo Full Stack y
									diseño personalizado. Nos enorgullece no solo construir
									páginas web, sino también crear experiencias únicas que
									cumplen con tus objetivos. Colaborar con nosotros significa
									beneficiarte de soluciones digitales que van más allá de las
									expectativas, fusionando tecnología y creatividad para obtener
									resultados tangibles.
								</Text>
							</Box>
							<Box>
								<Text fontSize="4xl" textAlign="center">
									Nuestro equipo
								</Text>
								<Text textAlign="justify">
									En ZifyPro destacamos como expertos en desarrollo Full Stack y
									diseño personalizado. Nos enorgullece no solo construir
									páginas web, sino también crear experiencias únicas que
									cumplen con tus objetivos. Colaborar con nosotros significa
									beneficiarte de soluciones digitales que van más allá de las
									expectativas, fusionando tecnología y creatividad para obtener
									resultados tangibles.
								</Text>
							</Box>
						</Flex>
					</Flex>
				</Center>
			</Box>
		</>
	);
};
