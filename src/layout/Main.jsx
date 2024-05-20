import Footer from "../components/Footer/Footer";
import FooterSm from "../components/Footer/Footer-sm";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header-sm";
import Hero from "../components/Hero/Hero";

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
        <Hero/>
      </section>

      {/* Footer section */}
      <section className=" bottom-0">
        <Footer />
        <FooterSm/>
      </section>
    </div>
  );
};

export default Main;
