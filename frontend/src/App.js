import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./components/dogGallery";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
