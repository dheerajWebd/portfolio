import About from "../camponent/About";
import Main from "../camponent/main";
import My_work from "../camponent/Mywork";
import Serves from "../camponent/Serves";
import ContactForm from "../camponent/contant";
// import OfflinePage from "../camponent/ofline";
function HomePage() {
  return (
    <>
      <Main />
      <About />
      <Serves />
      <ContactForm />
      <My_work />
    </>
  );
}
export default HomePage;
