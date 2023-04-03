import "./styles.css";
import StartForm from "./StartForm";
import { createContext, useEffect, useState } from "react";
import UserInfo from "./UserInfo";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [finishResults, setFinishResults] = useState("");
  const handleStartQuiz = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const onFinishQuiz = async (score) => {
    const results = { username: name, email, score };
    const serverUri = "https://jquiz-athjd4btb4c0fadd.z01.azurefd.net";
    try {
      const response = await fetch(serverUri + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://jquiz.vercel.app/",
        },
        body: JSON.stringify(results),
      });
      if (response.ok) {
        setFinishResults("Results are submitted!");
      }
    } catch (err) {
      setFinishResults("Results were not submitted: " + err);
    }
  };

  const userContextValue = {
    name,
    setName,
    email,
    setEmail,
  };
  return (
    <>
      <UserContext.Provider value={userContextValue}>
        <div className="App">
          <UserInfo />
          <StartForm
            onStartQuiz={handleStartQuiz}
            onFinishQuiz={onFinishQuiz}
          />

          <h2>{finishResults}</h2>
        </div>
      </UserContext.Provider>
      <div className="footer">Quiz v.0.0.1</div>
    </>
  );
};

export default App;
