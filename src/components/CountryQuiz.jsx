import React, { useEffect, useState } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getCountry } from "../actions";
import quizImage from "../assets/static/quizImage.svg";
import callingCodeData from "../data/callingCodeData";
import AnswerForm from "../containers/AnswersForm";

const CountryQuiz = ({ getCountry, country, handleClickNextInMain }) => {
  const [typeArrayQuestion] = useState(["capital", "flag"]);
  const [typeQuiz] = useState(
    typeArrayQuestion[Math.floor(Math.random() * typeArrayQuestion.length)]
  );
  const [answers, setAnswers] = useState(["A", "B", "C", "D"]);

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
        width="46.4rem"
        zIndex="2"
        justifyContent="flex-end"
        position="absolute"
        top="14rem"
        marginLeft="2rem"
      >
        <Image src={quizImage} width="18.2rem" height="11.6rem" />
      </Flex>
      <Flex
        width="46.4rem"
        min-height="51.5rem"
        direction="column"
        borderRadius="2.4rem"
        background="#ffffff"
      >
        {typeQuiz === "capital" ? (
          <Flex direction="column" margin="3.2rem">
            <Text
              marginTop="2.7rem"
              fontFamily="Poppins"
              fontWeight="extrabold"
              color="#1D355D"
              fontSize="2.4rem"
              lineHeight="3.6rem"
            >{`${country[0].capital} is the capital of`}</Text>

            <AnswerForm
              answers={answers}
              handleClickNextInMain={handleClickNextInMain}
            />
          </Flex>
        ) : (
          <Flex direction="column" margin="3.2rem">
            <Flex direction="column">
              <Image
                src={country[0].flag}
                width="8.4rem"
                height="5.4rem"
                filter="drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));"
                borderRadius="0.4rem"
              />
              <Text
                marginTop="2.8rem"
                fontFamily="Poppins"
                fontWeight="extrabold"
                color="#1D355D"
                fontSize="2.4rem"
                lineHeight="3.6rem"
              >
                Which country does these flag belong to?
              </Text>
              <AnswerForm
                answers={answers}
                handleClickNextInMain={handleClickNextInMain}
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
