import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Economy from "./Pages/Economy";
import Politics from "./Pages/Politics";
import Science from "./Pages/Science";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Search" element={<Search />} />
        <Route path="Economy" element={<Economy />} />
        <Route path="Politics" element={<Politics />} />
        <Route path="Science" element={<Science />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
