import Footer from "../components/Footer/Footer";
import FooterSm from "../components/Footer/Footer-sm";
import Header from "../components/Header/Header";
import HeaderSm from "../components/Header/Header-sm";

const Main = () => {
  return (
    <div>
      {/* Header section */}
      <section>
        <Header />
        <HeaderSm />
      </section>

      {/* Body section */}
      <h1>This is body part</h1>

      {/* Footer section */}
      <section>
        <Footer />
        <FooterSm/>
      </section>
    </div>
  );
};

export default Main;
