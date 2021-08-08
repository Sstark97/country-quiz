import React from "react";
import { Flex, Text, Image, Button, useMediaQuery } from "@chakra-ui/react";
import { connect } from "react-redux";
import { setResetAnswerCount } from "../actions";
import finishImage from "../assets/static/finishImage.svg";

const FinalQuiz = ({
  handleResetQuizz,
  setResetAnswerCount,
  answerCorrectCount,
}) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const handleClickResetQuizz = () => {
    setResetAnswerCount();
    handleResetQuizz();
  };

  return (
    <>
      <Flex
        width={isLargerThan600 ? "46.4rem" : "28.2rem"}
        min-height="54.2rem"
        height="54.2rem"
        direction="column"
        borderRadius="2.4rem"
        background="#ffffff"
      >
        <Flex direction="column">
          <Flex width="100%" justifyContent="center" marginTop="4.9rem">
            <Image
              src={finishImage}
              width={isLargerThan600 ? "23.2rem" : "18.2rem"}
              height={isLargerThan600 ? "12.8rem" : "9.8rem"}
            />
          </Flex>
          <Text
            marginTop="2.7rem"
            fontFamily="Poppins"
            fontWeight="extrabold"
            color="#1D355D"
            fontSize={isLargerThan600 ? "4.8rem" : "3.6rem"}
            lineHeight="7.2rem"
            textAlign="center"
          >
            Results
          </Text>
          <Text
            fontFamily="Poppins"
            fontSize="2.3rem"
            lineHeight="5.4rem"
            color="#1D355D"
            textAlign="center"
          >
            You got{" "}
            <Text
              as="span"
              zIndex="2"
              position="relative"
              top="-0.3rem"
              fontWeight="extrabold"
              color="#52EE78"
              fontSize="2.8rem"
            >
              {answerCorrectCount}
            </Text>{" "}
            correct answers
          </Text>
          <Button
            width={isLargerThan600 ? "20.9rem" : "10.5rem"}
            height={isLargerThan600 ? "6.2rem" : "3.1rem"}
            alignSelf="center"
            padding="1.8rem 6.1rem 1.8rem 6.1rem"
            background="none"
            fontSize="1.8rem"
            lineHeight="2.7rem"
            color="#1D355D"
            border="0.2rem solid #1D355D"
            boxSizing="border-box"
            borderRadius="1.2rem"
            marginTop="7.1rem"
            onClick={handleClickResetQuizz}
          >
            <Text width="8.7rem" height="2.7rem">
              Try Again
            </Text>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const mapStateToProps = (state) => ({
  answerCorrectCount: state.answerCorrectCount,
});

const mapDispatchToProps = {
  setResetAnswerCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalQuiz);
