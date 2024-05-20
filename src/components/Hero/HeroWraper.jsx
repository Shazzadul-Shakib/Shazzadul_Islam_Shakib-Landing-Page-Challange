import { BottomHero } from "./BottomHero";
import Hero from "./Hero";

const HeroWraper = () => {
  return (
    <div className="">
      <div>
        <Hero />
      </div>
      <div className="flex justify-center">
        <BottomHero />
      </div>
    </div>
  );
};

export default HeroWraper;
