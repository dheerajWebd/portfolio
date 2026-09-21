import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GrTooltip } from "react-icons/gr";

const About = lazy(() => import("./About.jsx"));
const My_work = lazy(() => import("./Mywork.jsx"));
const Serves = lazy(() => import("./Serves.jsx"));
const Main = lazy(() => import("./main.jsx"));
const ContactForm = lazy(() => import("./contant"));
const Header = lazy(() => import("./Header.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));
const HomePage = lazy(() => import("../somePagesOfwebsite/HomePage.jsx"));
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Suspense fallback={<>...</>}>
          <Header />
        </Suspense>
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
