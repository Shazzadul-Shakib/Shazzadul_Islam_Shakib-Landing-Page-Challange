import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./module.hero.css";
import sliderImage from "../../assets/Image.png";
import { allIcons } from "../../data/All-icons";

export default function Hero() {
  const { cart } = allIcons;

  return (
    <div className=" h-[30dvh] sm:h-[40dvh] lg:h-[90dvh] flex items-center justify-center bg-gray-100">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide className=" relative flex items-center justify-center h-full bg-carBg text-2xl">
          <div className="absolute z-10 left-10 md:left-44 ">
            <h1 className="  font-bold text-txtD1 text-xl md:text-3xl lg:text-5xl">
              Personalized Eyeglass <br /> Shopping
            </h1>
            <button className=" flex justify-center items-center gap-2 px-[24px] py-[8px] md:px-[40px] md:py-[14px] bg-txtD1 text-txtL1 text-sm font-bold rounded my-6 md:my-10">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              className="absolute bottom-0 h-[80%] "
              src={sliderImage}
              alt="Slider Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative flex items-center justify-center h-full bg-carBg text-2xl">
          <div className="absolute z-10 left-10 md:left-44 ">
            <h1 className="  font-bold text-txtD1 text-xl md:text-3xl lg:text-5xl">
              Personalized Eyeglass <br /> Shopping
            </h1>
            <button className=" flex justify-center items-center gap-2 px-[24px] py-[8px] md:px-[40px] md:py-[14px] bg-txtD1 text-txtL1 text-sm font-bold rounded my-6 md:my-10">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              className="absolute bottom-0 h-[80%] "
              src={sliderImage}
              alt="Slider Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" relative flex items-center justify-center h-full bg-carBg text-2xl">
          <div className="absolute z-10 left-10 md:left-44 ">
            <h1 className="  font-bold text-txtD1 text-xl md:text-3xl lg:text-5xl">
              Personalized Eyeglass <br /> Shopping
            </h1>
            <button className=" flex justify-center items-center gap-2 px-[24px] py-[8px] md:px-[40px] md:py-[14px] bg-txtD1 text-txtL1 text-sm font-bold rounded my-6 md:my-10">
              {cart} Buy Now
            </button>
          </div>

          <div>
            <img
              className="absolute bottom-0 h-[80%] "
              src={sliderImage}
              alt="Slider Image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
