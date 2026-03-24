import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export const serverUrl = "http://localhost:8000";

function App() {
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/user/current-user`, {
          withCredentials: true,
        });
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    getUser();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
