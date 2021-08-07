import React, { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getCountry } from "../actions";

const CountryQuiz = ({ getCountry, country }) => {
  useEffect(() => {
    getCountry();
  }, []);
  return (
    <Flex
      width="46.4rem"
      height="51.5rem"
      borderRadius="2.4rem"
      background="#ffffff"
    ></Flex>
  );
};

const mapStateToProps = (state) => ({ country: state.country });

const mapDispatchToProps = {
  getCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryQuiz);
