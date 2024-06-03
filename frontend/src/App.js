import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./components/dogGallery";
// import Header from "./components/header";
import HomePage from "./components/homePage";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
