import api from "../../api/api";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate();
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const handleUsernme = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const {saveToken,authenticateUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.login({username,password});
            console.log(response);
            saveToken(response.data.authToken);
            authenticateUser();
            console.log(response.data.authToken);
            navigate('/');
            return response;
            
        } catch (error) {
            console.log(error);
        }
    }
    return (
<form onSubmit={handleSubmit}>
    <label htmlFor="username"> Username:
        <input id="username" type = "text" value={username} onChange={handleUsernme} />
    </label>
    <label htmlFor="password"> Password:
        <input id="password" type = "password" value={password} onChange={handlePassword} />
    </label>
        <button type = "submit"> Login
        </button>

    </form>
    )
    
}

export default LoginPage;