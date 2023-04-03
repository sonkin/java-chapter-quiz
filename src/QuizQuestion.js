import React, { useEffect, useState } from "react";

const QuizQuestion = ({ question, onSolved, score }) => {
  const [selectedOption, setSelectedOption] = useState(
    null
  );
  const [isCorrect, setIsCorrect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(
    false
  );
  const [showScoreUpdate, setShowScoreUpdate] = useState(
    false
  );

  useEffect(() => {
    setShowExplanation(false);
    setShowScoreUpdate(false);
    setIsCorrect(null);
    setSelectedOption(null);
  }, [question]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === question.answer);
    onSolved(option === question.answer);
  };

  const handleExplanationClick = () => {
    setShowExplanation(true);
  };

  const handleScoreUpdate = () => {
    setShowScoreUpdate(true);
    // setTimeout(() => {
    //   setShowScoreUpdate(false);
    // }, 3000);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "left",
          margin: "20px",
          fontSize: "15pt"
        }}
      >
        {question.text}
      </div>
      <p
        style={{
          fontSize: "10pt",
          padding: "10px",
          backgroundColor: "#eef"
        }}
      ></p>
      <form>
        {question.options.map((option) => (
          <div
            key={option}
            style={{
              display: "flex",
              cursor: "pointer",
              padding: "10px"
            }}
            onClick={() => {
              handleOptionSelect(option);
              handleScoreUpdate();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "#eef";
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
            <span
              style={{ marginLeft: 0, fontSize: "1.2rem" }}
            >
              {option}
            </span>
          </div>
        ))}
      </form>

      {selectedOption && isCorrect !== null && (
        <div style={{ marginTop: "10px" }}>
          {isCorrect && (
            <p
              style={{ fontSize: "1.2rem", color: "green" }}
            >
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
                    color: "green"
                  }}
                >
                  Score increased! Current score: {score}
                </p>
              )}
              {isCorrect === false && (
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "red"
                  }}
                >
                  Score decreased! Current score: {score}
                </p>
              )}
            </div>
          )}
          {selectedOption === question.answer &&
            !showExplanation && (
              <div>
                <a
                  href="#"
                  onClick={handleExplanationClick}
                  style={{
                    color: "black",
                    textAlign: "left",
                    textDecoration: "none"
                  }}
                >
                  ▼ Explanation
                </a>
              </div>
            )}
          {showExplanation && (
            <div style={{ margin: "10px" }}>
              <h3
                style={{
                  display: "flex",
                  textAlign: "left",
                  marginTop: "30px"
                }}
              >
                Explanation:
              </h3>
              <p style={{ textAlign: "left" }}>
                {question.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
