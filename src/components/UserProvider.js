import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [getUser, setUser] = useState(null)
    const [getList, setList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [searchSong, setSearchSong] = useState([])



    const signInUser = (input) => {
        setUser(input);
    }

    const singOutUser = () => {
        setUser(null);
    }
    const upDateSongs = (input) => {
        setSearchSong(input)
    }
    const modalHandler = (input) => {
        setIsOpen(input)
        console.log(isOpen)
    }
    const audioValue = (input) => {
        setCurrentItem(input)
    }
    const obj = {
        modalHandler,
        isOpen,
        getUser,
        signInUser,
        singOutUser,
        getList,
        setList,
        audioValue,
        currentItem,
        upDateSongs,
        searchSong,


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