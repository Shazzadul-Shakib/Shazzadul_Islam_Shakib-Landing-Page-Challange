import { BottomHero } from "./BottomHero";
import Hero from "./Hero";

const HeroWraper = () => {
  return (
    <div>
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
