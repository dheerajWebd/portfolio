import { lazy, Suspense } from "react";
import { TestmonilBox } from "../camponent/box";
import { RiStarFill } from "react-icons/ri";
const About = lazy(() => import("../camponent/About"));
const My_work = lazy(() => import("../camponent/Mywork"));
const Serves = lazy(() => import("../camponent/Serves"));
const Main = lazy(() => import("../camponent/main"));
const ContactForm = lazy(() => import("../camponent/contant"));
// import OfflinePage from "../camponent/ofline";
function HomePage() {
  return (
    <>
      <Main />
      <Suspense fallback={<>...</>}>
        <About />
      </Suspense>
      <Suspense fallback={<>...</>}>
        <Serves />
      </Suspense>
      <Suspense fallback={<>...</>}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<>...</>}>
        <My_work />
      </Suspense>

    </>
  );
}
export default HomePage;
