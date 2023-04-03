import React, { useEffect, useState } from "react";

const QuizQuestion = ({ question, onSolved, score }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showScoreUpdate, setShowScoreUpdate] = useState(false);

  useEffect(() => {
    setShowScoreUpdate(false);
    setIsCorrect(null);
    setSelectedOption(null);
  }, [question]);

  const handleOptionSelect = (option) => {
    if (isCorrect) return;
    setSelectedOption(option);
    setIsCorrect(option === question.answer);
    onSolved(option === question.answer);
  };

  const handleScoreUpdate = () => {
    setShowScoreUpdate(true);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "left",
          margin: "5px",
          fontSize: "15pt",
        }}
      >
        {question.text}
      </div>
      <form>
        {question.options.map((option) => (
          <div
            key={option}
            style={{
              display: "flex",
              cursor: "pointer",
              padding: "10px",
            }}
            onClick={() => {
              handleOptionSelect(option);
              handleScoreUpdate();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#eef";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
            }}
          >
            <input
              type="radio"
              name="option"
              value={option}
              checked={option === selectedOption}
              onChange={() => handleOptionSelect(option)}
              disabled={selectedOption !== null}
              style={{ marginRight: "10px" }}
            />
            <span style={{ marginLeft: 0, fontSize: "1.2rem" }}>{option}</span>
          </div>
        ))}
      </form>

      {selectedOption && isCorrect !== null && (
        <div style={{ marginTop: "10px" }}>
          {isCorrect && (
            <p style={{ fontSize: "1.2rem", color: "green" }}>
              <span style={{ marginRight: "10px" }}>✓</span>
              Correct!
            </p>
          )}
          {isCorrect === false && (
            <p style={{ fontSize: "1.2rem", color: "red" }}>
              <span style={{ marginRight: "10px" }}>✘</span>
              Incorrect. Please try again.
            </p>
          )}
          {showScoreUpdate && (
            <div style={{ marginTop: "10px" }}>
              {isCorrect && (
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "green",
                  }}
                >
                  Score increased! Current score: {score}
                </p>
              )}
              {isCorrect === false && (
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "red",
                  }}
                >
                  Score decreased! Current score: {score}
                </p>
              )}
            </div>
          )}
          {isCorrect && (
            <div style={{ margin: "10px" }}>
              <h3
                style={{
                  display: "flex",
                  textAlign: "left",
                  marginTop: "30px",
                }}
              >
                Explanation:
              </h3>
              <p style={{ textAlign: "left" }}>{question.explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
