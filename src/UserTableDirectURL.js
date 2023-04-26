import {
  useParams,
} from "react-router-dom";
import UserTable from "./UserTable";
import {SERVER} from "./App";

const UserTableDirectURL = () => {
  const { quizId } = useParams();
  return <UserTable getServerUri={() => SERVER + quizId} />;
};

export default UserTableDirectURL;