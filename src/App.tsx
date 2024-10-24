import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import Leaderboard from "./pages/leaderboard";
import Tasks from "./pages/tasks";
import Profile from "./pages/profile";
import AppWrapper from "./components/app_wrapper";
import { configure } from "axios-hooks";
import axios from "./config/axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

configure({ axios });

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      {window.innerWidth > 800 ? (
        <p>Visit on mobile</p>
      ) : (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/app/" element={<AppWrapper />}>
            <Route path="home" element={<Home />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
