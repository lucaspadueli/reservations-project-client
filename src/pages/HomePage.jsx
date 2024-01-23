import { useState,useEffect } from "react";
import api from "../../api/api";
const HomePage = () => {
const [users,setUsers] = useState(null);

useEffect(()=>{
    async function fetchUsers(){
      const usersFromDB = await api.getAllUsers();
      setUsers(usersFromDB);
      console.log(usersFromDB);
    }
    fetchUsers();
},[])


  return (
    <div>
        <p> Teste </p>
        {users && users.map(user => {
            return(
                <div key = {user._id}>
                <p>{user.username}</p>
                 </div>
            )
        })}
    </div>
  )
};

export default HomePage;
