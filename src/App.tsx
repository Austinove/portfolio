import { FC } from "react";
import "./App.css";
import TopNavbar from "./components/TopNavbar";
import AboutMe from "./components/AboutMe";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <>
      <TopNavbar />
      <AboutMe />
    </>
  );
};

export default App;
