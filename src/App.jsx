import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotfound from "./pages/error/PageNotfound";
import Home from "./pages/home/Home";
import Unwrapped from "./pages/unwrapped/Unwrapped";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unwrapped/:id" element={<Unwrapped />} />
        <Route path="/*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
