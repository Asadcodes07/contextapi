import {useState} from "react";
import{createContext,useContext} from "react";

 const UserProvider = createContext();

const UserContext = ({children}) => {
    const [userInfo,setUserInfo] = useState({
        name:"Asad hayat",
        userId:"e1242",
    });
    return(
        <UserProvider.Provider value={{userInfo,setUserInfo}}>
            {children}
        </UserProvider.Provider>
    )
}
export default UserContext;
export const useUserContext = () => useContext(UserProvider);
