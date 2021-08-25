import { useState } from "react";
import "./App.css";
import AboutMe from "./components/aboutMe";
import ContactMe from "./components/contactMe";
import Footer from "./components/footer";
import Introdaction from "./components/introdaction";
import MyProject from "./components/myProject";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "darkMood" : "light"}>
        <label className="switch">
          <input onChange={() => setdarkMode(!darkMode)} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <AboutMe />
        <Introdaction />
        <MyProject />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
