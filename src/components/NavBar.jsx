import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
const NavBar = () => {
  const {isLoggedIn,user} = useContext(AuthContext);
  return(
    <nav className="bg-gray-800 h-12 ">
      { isLoggedIn ? ( <> 
        <ul className="flex flex-row font-serif text-zinc-300 py-2 justify-end">
      <li className="mr-4 ml-4 my-2 text-xs">Profile</li>
      <li className="mr-44 my-2 text-xs">Rooms</li>
        <li className="mr-4 my-2 text-xs"> <Link to = "/signup">Sign up</Link> </li>
        <li className="mr-4 my-2 text-xs">Login</li> </ul>
      </>) : (
        <ul className="flex flex-row font-serif text-zinc-300 py-2 justify-end">
        <li className="mr-48 my-2 text-xs"> <Link to = "/"> Home </Link> </li>
        <li className="mr-4 my-2 text-xs">Sign up</li>
        <li className="mr-4 my-2 text-xs">Login</li> </ul>

      ) }
      
      
    
    
    
  </nav>
  )
  
};

export default NavBar;
