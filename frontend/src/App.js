import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./components/dogGallery";
import HomePage from "./components/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
