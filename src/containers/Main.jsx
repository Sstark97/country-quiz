import React from "react";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import CountryQuiz from "../components/CountryQuiz";
import useGetRandomCountry from "../hooks/useGetRandomCountry";
import { connect } from "react-redux";
import { setCountry } from "../actions";

const Main = ({ setCountry }) => {
  const { loading, response, error } = useGetRandomCountry();

  if (!loading) {
    setCountry(response);
  }

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
            textAlign="start"
            fontSize="3.6rem"
            fontWeight="bold"
            width="46.4rem"
            color="#F2F2F2"
            lineHeight="5.4rem"
            textTransform="uppercase"
          >
            Country Quiz
          </Text>
          <CountryQuiz />
        </>
      )}
    </Flex>
  );
};

const mapDispatchToProps = {
  setCountry,
};

export default connect(null, mapDispatchToProps)(Main);
