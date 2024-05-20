import aboutUsImage from "../../assets/abImage.png";
const AboutUs = () => {
  return (
    <main className=" flex flex-col-reverse lg:flex-row justify-center items-center">
      <section className=" w-full lg:w-[60%]  bg-crdBD1 lg:py-[126px] text-balance h-[416px] pl-[50px] pr-[10px] md:h-[516px] md:pl-[100px] md:pr-[55px] lg:h-[616px] xl:pl-[224px] xl:pr-[155px] flex flex-col justify-center items-center">
        <div>
          <h1 className=" text-2xl xl:text-4xl font-bold text-txtD1 my-[20px]">
            Experience clear vision with OptiChroma Vision Frames
          </h1>
          <p className=" text-txtD2 my-[10px]">
            At OptiChroma, we believe that everyone deserves clear vision and
            stylish eyewear. That's why we've designed a collection of frames
            that prioritize both form and function.
          </p>
          <p className=" text-txtD2">
            Our team of experts is dedicated to helping you find the perfect
            pair of glasses.
          </p>
          <button className="px-[40px] py-[11px] bg-txtD1 text-txtL1 text-xs font-bold rounded mt-6 ">
            About Us
          </button>
        </div>
      </section>
      <section className="w-full lg:w-[40%]">
        <img
          className=" md:h-[516px] lg:h-[616px] "
          src={aboutUsImage}
          alt="About us Glaasses Image"
        />
      </section>
    </main>
  );
};

export default AboutUs;
