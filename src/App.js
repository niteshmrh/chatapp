import "./App.css";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Chats from "./component/Chats";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login type="login" />} />
        <Route path="/chats" element={<Chats type="chat" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
