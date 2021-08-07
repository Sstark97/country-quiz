import React, { useEffect, useState } from "react";
import { Flex, List, ListItem, Button } from "@chakra-ui/react";
import AnswerInput from "../components/AnswerInput";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { getCountry } from "../actions";

const AnswerForm = ({
  answers,
  getCountry,
  country,
  handleClickNextInMain,
}) => {
  const [clickAnswer, setClickAnswer] = useState(false);
  useEffect(() => {
    getCountry();
  }, [clickAnswer]);
  const handleClickAnswerInParent = (letter) => {
    const answer = answers.find((answer) => answer.letter === letter);
    const correct = answers.find((answer) => answer.correct);
    answer.click = true;
    correct.click = true;
    setClickAnswer(true);
  };

  const handleClickNext = () => {
    setClickAnswer(false);
    handleClickNextInMain();
  };

  return (
    <>
      <List marginTop="3.2rem">
        {answers.map((answer) => (
          <ListItem
            key={uuidv4()}
            width="40rem"
            height="5.6rem"
            border="2px solid rgba(96, 102, 208, 0.7)"
            borderRadius="1.2rem"
            _hover={!clickAnswer ? { border: "none" } : null}
            background={
              answer.click !== undefined && answer.correct && clickAnswer
                ? "#60BF88"
                : answer.click !== undefined && !answer.correct && clickAnswer
                ? "#EA8282"
                : null
            }
            display="flex"
            alignItems="center"
            marginBottom="2.5rem"
          >
            {" "}
            <AnswerInput
              letter={answer.letter}
              country={answer.land}
              correct={answer.correct}
              clickAnswer={clickAnswer}
              handleClickAnswerInParent={handleClickAnswerInParent}
            />
          </ListItem>
        ))}
      </List>
      {clickAnswer ? (
        <Flex width="100%" height="5.6rem" justifyContent="flex-end">
          <Button
            width="11.6rem"
            height="100%"
            background="#F9A826"
            color="#ffffff"
            fontFamily="Poppins"
            fontWeight="extrabold"
            fontSize="1.8rem"
            lineHeight="2.7rem"
            borderRadius="1.2rem"
            boxShadow="0px 2px 4px rgba(252, 168, 47, 0.4)"
            _hover={{ background: "#F9A826" }}
            onClick={handleClickNext}
          >
            Next
          </Button>
        </Flex>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({ country: state.country });

const mapDispatchToProps = {
  getCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
