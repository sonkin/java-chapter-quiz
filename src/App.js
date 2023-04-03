import "./styles.css";
import StartForm from "./StartForm";
import { createContext, useEffect, useState } from "react";
import UserInfo from "./UserInfo";

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  const userContextValue = {
    name,
    setName,
    email,
    setEmail,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      <div className="App">
        <UserInfo />
        <StartForm onStartQuiz={handleStartQuiz} />
        Quiz v.0.0.1
      </div>
    </UserContext.Provider>
  );
};

export default App;
