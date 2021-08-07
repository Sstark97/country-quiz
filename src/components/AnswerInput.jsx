import React from "react";
import { InputGroup, Input, InputLeftElement, Text } from "@chakra-ui/react";

const AnswerInput = ({
  letter,
  country,
  correct,
  clickAnswer,
  handleClickAnswerInParent,
}) => {
  const handleClickAnswer = () => {
    handleClickAnswerInParent();
  };

  return (
    <InputGroup
      fontFamily="Poppins"
      display="flex"
      alignItems="center"
      color="#6066D0CC"
      borderRadius="1.2rem"
      _hover={
        !clickAnswer
          ? {
              background: "#F9A826",
              cursor: "pointer",
              color: "#ffffff",
              borderRadius: "1.2rem",
            }
          : null
      }
      height="100%"
      onClick={handleClickAnswer}
      background={clickAnswer ? (correct ? "#60BF88" : "#EA8282") : null}
    >
      <InputLeftElement
        pointerEvents="none"
        marginLeft="1.9rem"
        height="100%"
        children={
          <Text fontSize="2.4rem" lineHeight="3.6rem">
            {letter}
            {console.log(correct)}
          </Text>
        }
        marginRight="4.7rem"
      />
      <Input
        fontSize="1.8rem"
        lineHeight="2.7rem"
        readOnly
        value={country}
        border="none"
        marginLeft="4.6rem"
        height="100%"
      />
    </InputGroup>
  );
};

export default AnswerInput;
