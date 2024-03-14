import {
  Button,
  ButtonGroup,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BiWorld } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { useTranslation } from "react-i18next";
export const NavbarMobile = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        bg="#111"
        textColor="white"
        h="60px"
        position="fixed"
        zIndex="1001"
        w="100%"
        fontFamily="Roboto mono, monospace"
        fontWeight="300"
        fontStyle="italic"
      >
        <Menu>
          <ButtonGroup alignItems="center" as={Link} href="#Home">
            <img
              src="./logo_blanco.png"
              alt="zifypro"
              width="60px"
              height="60px"
            />
          </ButtonGroup>
          <ButtonGroup>
            <Menu>
              <MenuButton
                as={Button}
                variant="link"
                colorScheme="black"
                _hover={{
                  transform: "scale(1.4,1.4)",
                }}
              >
                <BiWorld />
              </MenuButton>
              <MenuList bg="#111111" border="1px #111111">
                <MenuItem
                  fontSize="20px"
                  onClick={() => i18n.changeLanguage("en")}
                  bg="#111111"
                  border="1px #111111"
                  _hover={{ bg: "#61451E" }}
                >
                  EN
                </MenuItem>
                <MenuItem
                  onClick={() => i18n.changeLanguage("es")}
                  fontSize="20px"
                  bg="#111111"
                  border="1px #c3c3c3"
                  _hover={{ bg: "#61451E" }}
                >
                  ES
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} variant="link" colorScheme="black">
                <CiMenuBurger />
              </MenuButton>
              <MenuList bg="#111111" border="1px #111111">
                <MenuItem
                  as={Link}
                  href="#Home"
                  fontSize="20px"
                  bg="#111111"
                  border="1px #c3c3c3"
                  _hover={{ bg: "#61451E" }}
                >
                  {t("menu.inicio")}
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="#Projects"
                  fontSize="20px"
                  bg="#111111"
                  border="1px #c3c3c3"
                  _hover={{ bg: "#111111" }}
                >
                  {t("menu.proyectos")}
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="#Footer"
                  fontSize="20px"
                  bg="#111111"
                  border="1px #c3c3c3"
                  _hover={{ bg: "#111111" }}
                >
                  {t("menu.contacto")}
                </MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
        </Menu>
      </Flex>
    </>
  );
};
