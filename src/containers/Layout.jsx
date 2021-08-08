import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Footer from "./Footer";
import Main from "./Main";
import background from "../assets/static/background.png";

const Layout = () => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      backgroundImage={background}
      max-width="100vw"
      maxHeight="100vh"
    >
      <Flex
        width="100%"
        height="90%"
        justifyContent={isLargerThan600 ? "center" : null}
      >
        <Main />
      </Flex>

      <Flex
        width="100%"
        height="10%"
        justifyContent="center"
        alignItems={!isLargerThan600 ? "center" : null}
      >
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
