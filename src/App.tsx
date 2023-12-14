import React from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="px-4 pt-3">
        <AboutMe />
      </div>
    </>
  );
}

export default App;
