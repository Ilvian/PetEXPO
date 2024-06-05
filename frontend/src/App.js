import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./components/dogGallery";
import Cats from "./components/catGallery";
import Birds from "./components/birdGallery";
// import Header from "./components/header";
import HomePage from "./components/homePage";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import AdminPage from "./components/admin/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/birds" element={<Birds />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
