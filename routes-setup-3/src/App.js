import "./App.css";
import { Welcome, User, Posts } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/users" element={<User />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
