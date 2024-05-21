import Postercard from "../Cards/Postercard/Postercard";
import PosterImage1 from "../../assets/pImage1.png";
import PosterImage2 from "../../assets/pImage2.png";
import PosterImage3 from "../../assets/pImage3.png";
import PosterImage4 from "../../assets/pImage4.png";

const Poster = () => {
  return (
    <section className="my-[80px] w-[90%] grid grid-cols-1 xl:grid-cols-2 lg:w-[72%] mx-auto gap-y-8">
      <div className="flex flex-col items-center gap-8">
        <Postercard
          image={PosterImage1}
          height={500}
          title={"Bravo Sunglasses"}
          sale={"Up to 80% off on selected item"}
        />
        <Postercard
          image={PosterImage3}
          height={400}
          title={"John Jacobs"}
          sale={"Up to 40% off on selected item"}
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <Postercard
          image={PosterImage2}
          height={400}
          title={"Tommy Hilfiger"}
          sale={"Up to 30% off on selected item"}
        />
        <Postercard
          image={PosterImage4}
          height={500}
          title={"Vincent Chase"}
          sale={"Up to 10% off on selected item"}
        />
      </div>
    </section>
  );
};

export default Poster;
