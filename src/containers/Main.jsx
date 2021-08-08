import React, { useState } from "react";
import { Flex, Text, Spinner, useMediaQuery } from "@chakra-ui/react";
import CountryQuiz from "../components/CountryQuiz";
import FinalQuiz from "../components/FinalQuiz";
import useGetRandomCountry from "../hooks/useGetRandomCountry";
import { connect } from "react-redux";
import { setCountry } from "../actions";

const Main = ({ setCountry }) => {
  const { loading, response, nextQuiz } = useGetRandomCountry();
  const [finished, setFinished] = useState(false);
  const [renderFinal, setRenderFinal] = useState(false);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  if (!loading) {
    setCountry(response);
  }

  const handleClickNextInMain = () => {
    if (finished) {
      console.log("Render: " + finished);
      setRenderFinal(true);
    } else {
      nextQuiz();
    }
  };

  const handleFinishQuizz = () => {
    setFinished(true);
  };

  const handleResetQuizz = () => {
    setFinished(false);
    setRenderFinal(false);
    nextQuiz();
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      direction="column"
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          <Text
            as="h2"
            textAlign={isLargerThan600 ? "start" : "center"}
            fontSize={isLargerThan600 ? "3.6rem" : "2rem"}
            fontWeight="bold"
            width="46.4rem"
            color="#F2F2F2"
            lineHeight="5.4rem"
            textTransform="uppercase"
          >
            Country Quiz
          </Text>
          {renderFinal ? (
            <FinalQuiz handleResetQuizz={handleResetQuizz} />
          ) : (
            <CountryQuiz
              handleClickNextInMain={handleClickNextInMain}
              handleFinishQuizz={handleFinishQuizz}
              finished={finished}
            />
          )}
        </>
      )}
    </Flex>
  );
};

const mapDispatchToProps = {
  setCountry,
};

export default connect(null, mapDispatchToProps)(Main);
