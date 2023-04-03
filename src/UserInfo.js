import { useContext } from "react";
import { UserContext } from "./App";

const UserInfo = () => {
  const { name, email } = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        marginBottom: "20px"
      }}
    >
      {name && <div>Name: {name}</div>}
      {email && <div>Email: {email}</div>}
    </div>
  );
};

export default UserInfo;
