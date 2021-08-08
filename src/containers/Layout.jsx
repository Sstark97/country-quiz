import React from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Main from "./Main";
import background from "../assets/static/background.png";

const Layout = () => (
  <Flex
    width="100%"
    height="100%"
    direction="column"
    backgroundImage={background}
    max-width="100vw"
    maxHeight="100vh"
  >
    <Flex width="100%" height="90%">
      <Main />
    </Flex>

    <Flex width="100%" height="10%" justifyContent="center">
      <Footer />
    </Flex>
  </Flex>
);

export default Layout;
