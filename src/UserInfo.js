import { useContext } from "react";
import { UserContext } from "./App";

const UserInfo = () => {
  const { name, email } = useContext(UserContext);

  return (
    <div className="topUserInfo">
      {name && (
        <div>
          <b>Name:</b> {name}
        </div>
      )}
      {email && (
        <div>
          <b>Email:</b> {email}
        </div>
      )}
    </div>
  );
};

export default UserInfo;
