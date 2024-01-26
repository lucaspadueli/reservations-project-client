import { useState } from "react";
import api from "../../api/api";
import NavBar from "../components/NavBar";
import { Link,useNavigate } from "react-router-dom";
const SignUpPage = () => {
const navigate = useNavigate();
const [username,setUserName] = useState('');
const [password,setPassword] = useState('');
const [email,setEmail] = useState('');
const [errorMessage,setErrorMessage] = useState('');
const handleUserName = (e) => setUserName(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);
const handleEmail = (e) => setEmail(e.target.value);
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await api.signUp({username,email,password});
     navigate('/');
     return;
    } catch (error) {
       setErrorMessage(error.response.data.description);
        console.log(error);
    }
    
}
return (
   
    <div className=" h-screen">
     <NavBar/>
      
      <div className="bg-slate-200 h-80">
    <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="ml-2" htmlFor="username">Username:
        <input className="border border-solid border-black ml-5 my-2" id="username" type="text" value={username} onChange={handleUserName}/>
        </label>
        
        <label className="ml-2" htmlFor="password">Password:
        <input className="border border-solid border-black ml-6 my-2" id = "password" type="password" value={password} onChange={handlePassword} />
        </label>
        <label className = "ml-2" htmlFor="email"> Email:
        <input className="border border-solid border-black ml-14 my-2" id = "email" type="email" value={email} onChange={handleEmail}/>
        </label>
        <button type="submit">Sign Up</button>
        {errorMessage && <p className="text-center text-red-600">{errorMessage}</p>}
    </form>
      </div>

      
      
    </div>
  );

}

export default SignUpPage;