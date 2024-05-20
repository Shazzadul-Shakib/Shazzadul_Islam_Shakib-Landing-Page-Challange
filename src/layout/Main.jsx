import AboutUs from "../components/AboutUs/AboutUs";
import Postercard from "../components/Cards/Postercard/Postercard";
import Footer from "../components/Footer/Footer";
import FooterSm from "../components/Footer/Footer-sm";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header-sm";
import HeroWraper from "../components/Hero/HeroWraper";
import Poster from "../components/Poster/Poster";

const Main = () => {
  return (
    <div className=" min-h-[100dvh] relative">
      {/* Header section */}
      <section>
        <Header />
        <HeaderSm />
      </section>

      {/* Body section */}
      <section>
        <HeroWraper />
        <Poster />
        <AboutUs/>
      </section>

      {/* Footer section */}
      <section className=" bottom-0">
        <Footer />
        <FooterSm />
      </section>
    </div>
  );
};

export default Main;
