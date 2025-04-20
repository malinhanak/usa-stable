import "./App.css";
import Logo from "./atoms/Logo";
import Navigation from "./organisms/Navigation";
import Main from "./atoms/Main";
import UserPanel from "./organisms/UserPanel";
import { Outlet } from "react-router";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

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
