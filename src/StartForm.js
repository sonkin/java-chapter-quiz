import React, { useContext, useState } from "react";
import { UserContext } from "./App";
import { questionDB } from "./questionDB";
import Quiz from "./Quiz";
import "./styles.css"; // import your CSS file here

const StartForm = ({ onStartQuiz, onFinishQuiz, quizID }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { name, setName, email, setEmail } = useContext(UserContext);

  const handleStartQuiz = () => {
    const valid = validateForm();
    if (valid) {
      setShowQuiz(true);
      onStartQuiz();
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!name) {
      setNameError("Please enter your name.");
      isValid = false;
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Please enter your email.");
      isValid = false;
    } else if (!email.endsWith("@dxc.com")) {
      setEmailError("Please enter a valid email @dxc.com");
      isValid = false;
    } else {
      setEmailError("");
    }
    return isValid;
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  let questionData = questionDB[quizID];

  return (
    <div className="App">
      {!showQuiz && (
        <div class="startForm">
          <h2>
            {questionData.title}
            <br />
            <br />
            {questionData.subtitle}
          </h2>
          <div style={{ padding: "10px" }}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={handleChangeName}
            />
            <div style={{ color: "red" }}>{nameError}</div>
          </div>
          <div style={{ padding: "10px" }}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={handleChangeEmail}
            />
            <div style={{ color: "red" }}>{emailError}</div>
          </div>
          <button
            className="button-style"
            style={{ marginTop: "50px" }}
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </div>
      )}
      {showQuiz && (
        <Quiz
          questions={questionDB[quizID].questions}
          onFinishQuiz={onFinishQuiz}
        />
      )}
    </div>
  );
};

export default StartForm;
