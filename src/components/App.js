import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/User";
function App() {
  const [theme, setTheme] = useState("light");
  //const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
      <Header theme={theme} setTheme={setTheme}  />
      <Profile theme={theme} />
      </UserProvider>
    </main>
  );
}

export default App;
