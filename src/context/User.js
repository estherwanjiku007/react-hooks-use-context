import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
const UserContext=React.createContext()
function UserProvider(){
  
    const user = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
      };
  return(
  <UserContext.Provider value={user}>
    <Header/>
    <Profile/>
  </UserContext.Provider>
  ) 
}
export  {UserContext,UserProvider}