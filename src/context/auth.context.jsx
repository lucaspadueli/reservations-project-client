import { createContext,useState } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext();

function AuthProviderWrapper({children}){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [isLoading,setIsLoading] = useState(true);
    const [user,setUser] = useState(null);

    return(
        <AuthContext.Provider value = {{isLoggedIn,isLoading,user}}>
        {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProviderWrapper};

AuthProviderWrapper.propTypes = {
    children: PropTypes.node.isRequired
};
