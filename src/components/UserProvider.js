import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [getUser, setUser] = useState(null)

    const signInUser = (input) => {
        setUser(input);
    }

    const obj = {
        getUser,
        signInUser
    }
    return (
        <>
            <UserContext.Provider value={obj}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export const useUser = () => {
    return useContext(UserContext)
}