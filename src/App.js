import "./styles.css";
import StartForm from "./StartForm";
import { createContext, useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import UserTableDirectURL from "./UserTableDirectURL";
import UserTable from "./UserTable";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router-dom";

export const SERVER = "https://jquiz-athjd4btb4c0fadd.z01.azurefd.net/";
export const UserContext = createContext();

const Main = () => {
  const { quizId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [finishResults, setFinishResults] = useState(null);
  const handleStartQuiz = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  const getServerUri = () => {
    return SERVER + quizId;
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
    try {
      const response = await fetch(getServerUri() + "/users", {
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
    <div className="App">
      <UserContext.Provider value={userContextValue}>
        <UserInfo />
        <StartForm
          quizID={quizId}
          onStartQuiz={handleStartQuiz}
          onFinishQuiz={onFinishQuiz}
        />
        <div>{finishResults}</div>
        {finishResults && (
          <UserTable getServerUri={getServerUri} currentUserEmail={email} />
        )}
      </UserContext.Provider>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/1" replace />,
  },
  {
    path: "/:quizId",
    element: <Main />,
  },
  {
    path: "/results/:quizId",
    element: <UserTableDirectURL />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
