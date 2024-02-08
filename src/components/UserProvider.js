import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [getUser, setUser] = useState(null)
    const [getList, setList] = useState([]);


    const signInUser = (input) => {
        setUser(input);
    }

    const singOutUser = () => {
        setUser(null);
    }
    const upDateSongs = (input) => {
        setList(input);
    }
    const obj = {
        getUser,
        signInUser,
        singOutUser,
        upDateSongs,
        getList
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