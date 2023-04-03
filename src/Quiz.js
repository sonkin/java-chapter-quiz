import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";

const Quiz = ({ questions, onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleQuestionSolved = (isCorrect) => {
    if (isCorrect) {
      setSolvedQuestions([...solvedQuestions, currentQuestionIndex]);
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(null);
      onFinishQuiz(score);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Current score: {score}
      </div>
      {currentQuestion && (
        <p
          style={{
            fontSize: "15pt",
            fontWeight: "bold",
            padding: "10px",
            backgroundColor: "#eef",
          }}
        >
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
      )}
      {currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          onSolved={handleQuestionSolved}
          score={score}
        />
      )}
      {solvedQuestions.includes(currentQuestionIndex) && (
        <button className="button-style" onClick={handleNextClick}>
          {currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      )}
      {!currentQuestion && (
        <div>
          <h2>Final Score: {score}</h2>
          <p style={{ fontSize: "15pt" }}>
            You have answered all {totalQuestions}{" "}
            {totalQuestions > 1 ? "questions" : "question"}. Thank you for
            participation!
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
