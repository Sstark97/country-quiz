import React, { useEffect, useState } from "react";
import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getCountry } from "../actions";
import quizImage from "../assets/static/quizImage.svg";
import callingCodeData from "../data/callingCodeData";
import AnswerForm from "../containers/AnswersForm";

const CountryQuiz = ({
  getCountry,
  country,
  handleClickNextInMain,
  handleFinishQuizz,
  finished,
}) => {
  const [typeArrayQuestion] = useState(["capital", "flag"]);
  const [typeQuiz] = useState(
    typeArrayQuestion[Math.floor(Math.random() * typeArrayQuestion.length)]
  );
  const [answers, setAnswers] = useState(["A", "B", "C", "D"]);
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  useEffect(() => {
    function setRandomQuestions() {
      getCountry();
      const randomAnswers = [];
      answers.forEach((answer) =>
        randomAnswers.push({
          land: callingCodeData[
            Math.floor(Math.random() * callingCodeData.length)
          ].name,
          letter: answer,
          correct: false,
        })
      );
      const randomPos = Math.floor(Math.random() * randomAnswers.length);
      randomAnswers.splice(randomPos, 1, {
        land: country[0].name,
        letter: randomAnswers[randomPos].letter,
        correct: true,
      });
      setAnswers(randomAnswers);
    }
    setRandomQuestions();
  }, []);

  return (
    <>
      {" "}
      <Flex
        width={isLargerThan600 ? "46.4rem" : "28.2rem"}
        zIndex="2"
        justifyContent="flex-end"
        position="absolute"
        top={isLargerThan600 ? "14rem" : "6rem"}
        marginLeft="2rem"
      >
        <Image
          src={quizImage}
          width={isLargerThan600 ? "18.2rem" : "12.1rem"}
          height={isLargerThan600 ? "11.6rem" : "7.8rem"}
        />
      </Flex>
      <Flex
        width={isLargerThan600 ? "46.4rem" : "28.2rem"}
        min-height="51.5rem"
        direction="column"
        borderRadius="2.4rem"
        background="#ffffff"
      >
        {typeQuiz === "capital" ? (
          <Flex direction="column" margin="3.2rem">
            <Text
              marginTop={isLargerThan600 ? "2.7rem" : "2.3rem"}
              fontFamily="Poppins"
              fontWeight="extrabold"
              color="#1D355D"
              fontSize={isLargerThan600 ? "2.4rem" : "1.4rem"}
              lineHeight="3.6rem"
            >{`${country[0].capital} is the capital of`}</Text>

            <AnswerForm
              answers={answers}
              handleClickNextInMain={handleClickNextInMain}
              handleFinishQuizz={handleFinishQuizz}
              finished={finished}
            />
          </Flex>
        ) : (
          <Flex direction="column" margin="3.2rem">
            <Flex direction="column">
              <Image
                src={country[0].flag}
                width={isLargerThan600 ? "8.4rem" : "6.4rem"}
                height={isLargerThan600 ? "5.4rem" : "3.4rem"}
                filter="drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));"
                borderRadius="0.4rem"
              />
              <Text
                marginTop="2.8rem"
                fontFamily="Poppins"
                fontWeight="extrabold"
                color="#1D355D"
                fontSize={isLargerThan600 ? "2.4rem" : "1.4rem"}
                lineHeight="3.6rem"
              >
                Which country does these flag belong to?
              </Text>
              <AnswerForm
                answers={answers}
                handleClickNextInMain={handleClickNextInMain}
                handleFinishQuizz={handleFinishQuizz}
                finished={finished}
              />
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const mapStateToProps = (state) => ({ country: state.country });

const mapDispatchToProps = {
  getCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryQuiz);
