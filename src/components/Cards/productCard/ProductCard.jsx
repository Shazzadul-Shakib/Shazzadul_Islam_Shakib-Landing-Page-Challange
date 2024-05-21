import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { allIcons } from "../../../data/All-icons";
import glass1 from "../../../assets/glass1.png";

const ProductCard = () => {
  const swiperRef = useRef(null);
  const { love } = allIcons;

  // Start autoplay on mouse hover
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.autoplay.delay = 1000;
      swiperRef.current.swiper.autoplay.start();
    }
  };

  // Stop autoplay on mouse leave
  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  return (
    <main className="my-[30px]">
      <div
        className="w-[320px] h-[370px] rounded overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          direction={"horizontal"}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={false} // Set initial autoplay to false
          modules={[Pagination, Autoplay]}
          className="w-full h-full cursor-pointer"
        >
          <SwiperSlide className="relative flex items-center justify-center h-full bg-carBg text-2xl">
            {/* Favourite and sell */}
            <div className="absolute top-[30px] px-[30px] flex justify-between w-full">
              <div className="h-[50px] w-[50px] rounded-full bg-crdBD1 text-sm font-bold flex justify-center items-center">
                10%
              </div>
              <div className="h-[50px] w-[50px] border border-txtD2 rounded-full text-txtD1 font-bold flex justify-center items-center">
                {love}
              </div>
            </div>

            {/* Image */}
            <div className="absolute w-[90%] mx-auto">
              <img src={glass1} alt="Glasses picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center h-full bg-carBg text-2xl">
            {/* Favourite and sell */}
            <div className="absolute top-[30px] px-[30px] flex justify-between w-full">
              <div className="h-[50px] w-[50px] rounded-full bg-crdBD1 text-sm font-bold flex justify-center items-center">
                10%
              </div>
              <div className="h-[50px] w-[50px] border border-txtD2 rounded-full text-txtD1 font-bold flex justify-center items-center">
                {love}
              </div>
            </div>

            {/* Image */}
            <div className="absolute w-[90%] mx-auto">
              <img src={glass1} alt="Glasses picture" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center h-full bg-carBg text-2xl">
            {/* Favourite and sell */}
            <div className="absolute top-[30px] px-[30px] flex justify-between w-full">
              <div className="h-[50px] w-[50px] rounded-full bg-crdBD1 text-sm font-bold flex justify-center items-center">
                10%
              </div>
              <div className="h-[50px] w-[50px] border border-txtD2 rounded-full text-txtD1 font-bold flex justify-center items-center">
                {love}
              </div>
            </div>

            {/* Image */}
            <div className="absolute w-[90%] mx-auto">
              <img src={glass1} alt="Glasses picture" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <h1 className="text-xl font-bold text-txtD1 my-[10px]">
          Bravo Sunglass
        </h1>
        <h2 className="text-lg text-txtD1 font-semibold mb-[15px]">$ 100</h2>
        <button>Add To Cart</button>
      </div>
    </main>
  );
};

export default ProductCard;
