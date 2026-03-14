import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./About.jsx";
import Header from "./Header.jsx";
import HomePage from "../somePagesOfwebsite/HomePage.jsx";
import Serves from "./Serves.jsx";
import ContactForm from "./contant.jsx"; 
import My_work from "./Mywork.jsx"; 
import Footer from "./footer.jsx";
// import OfflinePage from "./ofline.jsx";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        {/* <OfflinePage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={<About Extra={true} textCss={"text-[230px]"} />}
          />
          <Route
            path="/serves"
            element={<Serves active={{ textCss: "text-[162px] leading-35" }} />}
          />
          <Route path="/contant" element={<ContactForm />} />
          <Route path="/mywark" element={<My_work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
