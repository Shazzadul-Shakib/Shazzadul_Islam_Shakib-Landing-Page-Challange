import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { allIcons } from "../../../data/All-icons";

const ProductCard = ({ product }) => {
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
      <section>
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
            autoplay={false}
            modules={[Pagination, Autoplay]}
            className="w-full h-full cursor-pointer"
          >
            <SwiperSlide className="relative flex items-center justify-center h-full bg-carBg text-2xl">
              {/* Favourite and sell */}
              <div>
                {product.productSale > 0 && (
                  <div className="absolute top-[30px] left-[30px] h-[50px] w-[50px] rounded-full bg-crdBD1 text-sm font-bold flex justify-center items-center">
                    {product.productSale}%
                  </div>
                )}
                <div className="absolute top-[30px] right-[30px] h-[50px] w-[50px] border border-txtD2 rounded-full text-txtD1 font-bold flex justify-center items-center">
                  {love}
                </div>
              </div>

              {/* Image */}
              <div className="absolute w-[90%] mx-auto">
                <img src={product.productImage} alt="Glasses picture" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <h1 className="text-xl font-bold text-txtD1 my-[10px]">
            {product.productName}
          </h1>
          {product.productSale > 0 ? (
            <div className=" flex items-center gap-4">
              <h2 className="text-lg text-txtD1 font-semibold mb-[15px]">
                $ {product.productAfterSalePrice}
              </h2>
              <h2 className="text-lg text-txtD2 font-semibold mb-[15px] line-through text-opacity-25">
                $ {product.productPrice}
              </h2>
            </div>
          ) : (
            <h2 className="text-lg text-txtD1 font-semibold mb-[15px]">
              $ {product.productPrice}
            </h2>
          )}
          <button>Add To Cart</button>
        </div>
      </section>
    </main>
  );
};

export default ProductCard;
