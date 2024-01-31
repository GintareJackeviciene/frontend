import {createContext, useContext, useState} from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext({
    token: '',
    user: {},
    email: '',
    login(email, token) {},
    logout() {},
    isUserLoggedIn: false,
    isUserAdmin: false
});

export default function AuthCtxProvider({children}) {
    const [authState, setAuthState] = useState({
        token: '',
        email: '',
        user: {}
    });

    function login(email, token) {
        const tokenData = jwtDecode(token);

        setAuthState({
            token: token,
            email: email,
            user: tokenData.user
        })
    }

    function logout() {
        setAuthState({
           token: '',
           email: '',
           user: {}
        });
    }

    const isUserLoggedIn = !!authState.token;

    let isUserAdmin = false;
    if (isUserLoggedIn) {
        const tokenData = jwtDecode(authState.token);
        isUserAdmin = !!(tokenData.user.hasOwnProperty('scope') && tokenData.user.scope === 'admin');
    }

    const ctxValue = {
        isUserLoggedIn,
        isUserAdmin,
        token: authState.token,
        email: authState.email,
        user: authState.user,
        login,
        logout
    }

    return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
}


export function useAuthContext() {
    return useContext(AuthContext);
}