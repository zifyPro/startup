import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { ProjectsMobile } from "./ProjectsMobile";
import "./projects.css";

export const Projects = () => {
  const [t] = useTranslation("global");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      {isLargerThan1280 ? (
        <Box
          pt="70px"
          pb="70px"
          className="projects"
          fontFamily="Roboto, sans-serif"
          fontWeight="400"
          fontStyle="normal"
          fontSize="20px"
        >
          <Grid
            templateColumns="1fr 1fr"
            alignItems="center"
            justifyContent="center"
            gap={10}
          >
            <GridItem>
              <Flex
                direction="column"
                justify="center"
                align="start"
                textAlign="start"
                fontSize="20px"
                w="80%"
                ml="10%"
              >
                {" "}
                <div className="backgroundP">
                  <Text color="white" fontSize="40px">
                    VORTTEX GAMING
                  </Text>
                  <Text color="white">{t("Texto-trabajos.texto-vortex")}</Text>
                  <Text color="white">{t("Texto-trabajos.texto-prop1")}</Text>
                  <Text color="white">{t("Texto-trabajos.texto-prop2")}</Text>
                  <Text color="white">{t("Texto-trabajos.texto-prop3")}</Text>
                  <Text color="white">{t("Texto-trabajos.texto-prop4")}</Text>
                  <Button
                    colorScheme="gray"
                    as={Link}
                    href="https://pf-final-damian-projects.vercel.app/"
                    mt="10px"
                  >
                    Ver sitio
                  </Button>
                </div>
              </Flex>
            </GridItem>
            <GridItem data-aos="fade-left" width="90%">
              <img
                className="imgp"
                src="https://res.cloudinary.com/divxrmzge/image/upload/v1710385042/704shots_so_zi6yed.png"
                alt="Vortex"
              />
            </GridItem>
            <GridItem width="90%" ml="100px" data-aos="fade-right">
              <img
                className="imgp"
                src="https://res.cloudinary.com/divxrmzge/image/upload/v1710289714/Imagen_de_WhatsApp_2024-03-12_a_las_20.50.07_349667f0_s5sf99.jpg"
                alt="Bileebob"
                mr="120px"
              />
            </GridItem>
            <GridItem>
              <Flex
                direction="column"
                justify="center"
                align="start"
                textAlign="start"
                fontSize="20px"
                w="80%"
                ml="10%"
              >
                <div className="backgroundP">
                  <Text color="white" fontSize="40px">
                    BILEE-BOB
                  </Text>
                  <Text color="white">{t("Texto-trabajos.bilee-bob")}</Text>
                  <Text color="white">{t("Texto-trabajos.bilee-bob1")}</Text>
                  <Text color="white">{t("Texto-trabajos.bilee-bob2")}</Text>
                  <Text color="white">{t("Texto-trabajos.bilee-bob3")}</Text>
                  <Text color="white">{t("Texto-trabajos.bilee-bob4")}</Text>
                  <Text color="white">{t("Texto-trabajos.bilee-bob5")}</Text>
                  <Button
                    colorScheme="gray"
                    as={Link}
                    href="https://billybob-zifypro76-billybob-zifypros-projects.vercel.app/"
                    mt="10px"
                  >
                    Ver sitio
                  </Button>
                </div>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      ) : (
        <ProjectsMobile />
      )}
    </>
  );
};
