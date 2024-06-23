import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState([]);
  const onloadApi = async () => {
    const usersData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(usersData.data);
    setUser(usersData.data);
  };
  console.log("abd", user);

  useEffect(() => {
    onloadApi();
  }, []);

  return <h1>User Page</h1>;
};
export default Users;
