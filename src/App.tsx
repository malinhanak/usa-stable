import "./App.css";
import Logo from "./atoms/Logo";
import Navigation from "./organisms/Navigation";
import Main from "./atoms/Main";
import UserPanel from "./organisms/UserPanel";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Logo />
      <UserPanel />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
