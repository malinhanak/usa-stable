import { useState } from "react";
import { db } from "./firebase/config";
import "./App.css";
import { useAuth } from "./context/AuthContext";
console.log(db);

function App() {
  const { login, isLoggedIn, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Login successful!");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  };

  return isLoggedIn ? (
    <p>Already logged in, {user?.email}</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
