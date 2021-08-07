import React, { useEffect, useState } from "react";
import { Flex, Text, Image, List, ListItem } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getCountry } from "../actions";
import quizImage from "../assets/static/quizImage.svg";
import callingCodeData from "../data/callingCodeData";
import AnswerInput from "./AnswerInput";

const CountryQuiz = ({ getCountry, country }) => {
  const [typeArrayQuestion, setTypeQuestion] = useState(["capital", "flag"]);
  const [typeQuiz, setTypeQuizz] = useState(
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
        })
      );
      const randomPos = Math.floor(Math.random() * randomAnswers.length);
      console.log(country);
      randomAnswers.splice(randomPos, 1, {
        land: country[0].name,
        letter: randomAnswers[randomPos].letter,
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
        right="41.8rem"
      >
        <Image src={quizImage} width="18.2rem" height="11.6rem" />

        {console.log(answers)}
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

            <List marginTop="3.2rem">
              {answers.map((answer) => (
                <ListItem
                  key={answer.letter}
                  width="40rem"
                  height="5.6rem"
                  border="2px solid rgba(96, 102, 208, 0.7)"
                  borderRadius="1.2rem"
                  _hover={{
                    background: "#F9A826",
                    cursor: "pointer",
                    border: "none",
                  }}
                  display="flex"
                  alignItems="center"
                  marginBottom="2.5rem"
                >
                  {" "}
                  <AnswerInput letter={answer.letter} country={answer.land} />
                </ListItem>
              ))}
            </List>
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

              <List marginTop="3.2rem">
                {answers.map((answer) => (
                  <ListItem
                    key={answer.letter}
                    width="40rem"
                    height="5.6rem"
                    border="2px solid rgba(96, 102, 208, 0.7)"
                    borderRadius="1.2rem"
                    _hover={{
                      background: "#F9A826",
                      cursor: "pointer",
                      border: "none",
                    }}
                    display="flex"
                    alignItems="center"
                    marginBottom="2.5rem"
                  >
                    {" "}
                    <AnswerInput letter={answer.letter} country={answer.land} />
                  </ListItem>
                ))}
              </List>
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
