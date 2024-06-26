import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import FooterSm from "../components/Footer/Footer-sm";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header-sm";
import HeroWraper from "../components/Hero/HeroWraper";
import Poster from "../components/Poster/Poster";
import Products from "../components/Products/Products";

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
        <AboutUs />
        <Products />
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
