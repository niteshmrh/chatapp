import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login type="login" />} />
    </Routes>
  );
}

export default App;
