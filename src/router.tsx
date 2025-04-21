import { createBrowserRouter } from "react-router";

import App from "src/App";
import { AuthProvider } from "src/context/AuthContext";
import { LanguageProvider } from "src/context/LanguageContext";
import About from "src/pages/About";
import Home from "src/pages/Home";
import NotFound from "src/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "dressage", element: <>Dressyr</> },
      { path: "show-jumping", element: <>Hoppning</> },
      { path: "retirees", element: <>Pensionärer</> },
      { path: "ponies", element: <>Lilla Stallet</> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
