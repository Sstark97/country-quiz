import React, { useEffect, useState } from "react";
import { Flex, Text, Image, List, ListItem } from "@chakra-ui/react";
import AnswerInput from "../components/AnswerInput";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getCountry } from "../actions";

const AnswerForm = ({ answers, getCountry, country }) => {
  const [clickAnswer, setClickAnswer] = useState(false);
  useEffect(() => {
    getCountry();
  });
  const handleClickAnswerInParent = () => {
    setClickAnswer(true);
  };

  return (
    <List marginTop="3.2rem">
      {answers.map((answer) => (
        <ListItem
          key={uuidv4()}
          width="40rem"
          height="5.6rem"
          border="2px solid rgba(96, 102, 208, 0.7)"
          borderRadius="1.2rem"
          _hover={!clickAnswer ? { border: "none" } : null}
          display="flex"
          alignItems="center"
          marginBottom="2.5rem"
        >
          {" "}
          <AnswerInput
            letter={answer.letter}
            country={answer.land}
            correct={country[0].name === answer.land ? true : false}
            clickAnswer={clickAnswer}
            handleClickAnswerInParent={handleClickAnswerInParent}
          />
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({ country: state.country });

const mapDispatchToProps = {
  getCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
