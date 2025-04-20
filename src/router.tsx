import { createBrowserRouter } from "react-router";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
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
