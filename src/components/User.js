import React from "react";
import App from "./App";
const userContext=React.createContext()
function userProvider(){
    const user = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
      };
     // const [user,setUser]=useState(null)
  <userContext.Provider value={user}>
    <App/>
  </userContext.Provider>
}
export  {userContext,userProvider}