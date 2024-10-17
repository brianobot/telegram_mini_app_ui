import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import Leaderboard from "./pages/leaderboard";
import Tasks from "./pages/tasks";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
