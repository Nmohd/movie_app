import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./Home";
import SingleMovie from "./components/SingleMovie/SingleMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />

        <Route path="/home" element={<Home />} />
        <Route path="/single/:id" element={<SingleMovie />} />
      </Routes>
    </>
  );
}

export default App;
