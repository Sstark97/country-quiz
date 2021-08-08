import React from "react";
import {
  InputGroup,
  Input,
  InputLeftElement,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const AnswerInput = ({
  letter,
  country,
  correct,
  clickAnswer,
  handleClickAnswerInParent,
}) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const handleClickAnswer = (letter) => {
    handleClickAnswerInParent(letter);
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
      onClick={(answer) => {
        handleClickAnswer(letter);
      }}
    >
      <InputLeftElement
        pointerEvents="none"
        marginLeft="1.9rem"
        height="100%"
        children={
          <Text
            fontSize={isLargerThan600 ? "2.4rem" : "2rem"}
            lineHeight="3.6rem"
          >
            {letter}
          </Text>
        }
        marginRight="4.7rem"
      />
      <Input
        fontSize={isLargerThan600 ? "1.8rem" : "1.5rem"}
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
