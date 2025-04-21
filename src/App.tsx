import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import { Outlet } from "react-router";

import "src/App.css";
import { LanguageSwitcher } from "src/atoms/LanguageSwitcher";
import Logo from "src/atoms/Logo";
import Main from "src/atoms/Main";
import Navigation from "src/organisms/Navigation";
import UserPanel from "src/organisms/UserPanel";

function App() {
  return (
    <>
      <section className="langSelectionContainer">
        <UserPanel />
        <LanguageSwitcher />
      </section>

      <Logo />

      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default App;
