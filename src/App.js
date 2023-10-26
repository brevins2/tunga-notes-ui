import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import Resetpassword from "./Components/Account/Resetpassword";
import Notes from "./Components/Notes/Notes";
import { Addnotes } from "./Components/Notes/Addnotes";
import Dashboard from "./Components/Dsahboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/add-notes" element={<Addnotes />} />
      </Routes>
    </>
  );
}

export default App;
