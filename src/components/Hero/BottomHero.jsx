import { allIcons } from "../../data/All-icons";

export const BottomHero = () => {
  const { truck, payment, glasses, search } = allIcons;
  return (
    <main className=" flex items-center gap-[20px] lg:gap-[30px]">
      {/* Search */}
      <section>
        <div className=" bg-crdBD1 h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[130px] lg:w-[130px] rounded-full flex justify-center items-center text-txtD1 text-2xl lg:text-4xl  ">
          {search}
        </div>
        <div className=" hidden lg:block my-[40px] text-center">
          <h2 className=" text-txtD1 text-sm font-bold mb-[10px]">
            Search you sunglass
          </h2>
          <p className=" text-txtD2 text-xs">Shop Stylish Eyewear Now</p>
        </div>
      </section>
      {/* devider section */}
      <section className="flex items-center lg:mt-[-10%]">
        <div>
          <div className=" hidden md:block lg:hidden">------</div>
          <div className=" hidden lg:block">------------</div>
        </div>
        <div className=" hidden md:block h-[15px] w-[15px] rounded-full bg-crdBD1"></div>
      </section>
      {/* Sunglasses */}
      <section>
        <div className=" bg-crdBD1 h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[130px] lg:w-[130px] rounded-full flex justify-center items-center text-txtD1 text-2xl lg:text-4xl  ">
          {glasses}
        </div>
        <div className=" hidden lg:block my-[40px] text-center">
          <h2 className=" text-txtD1 text-sm font-bold mb-[10px]">
            Select Sunglass
          </h2>
          <p className=" text-txtD2 text-xs">Shade Your Style</p>
        </div>
      </section>
      {/* devider section */}
      <section className="flex items-center lg:mt-[-10%]">
        <div className=" hidden lg:block">------------</div>
        <div className=" hidden md:block lg:hidden">------</div>
        <div className=" hidden md:block h-[15px] w-[15px] rounded-full bg-crdBD1"></div>
      </section>
      {/* Payment */}
      <section>
        <div className=" bg-crdBD1 h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[130px] lg:w-[130px] rounded-full flex justify-center items-center text-txtD1 text-2xl lg:text-4xl  ">
          {payment}
        </div>
        <div className="hidden lg:block  my-[40px] text-center">
          <h2 className=" text-txtD1 text-sm font-bold mb-[10px]">
            Make Payment
          </h2>
          <p className=" text-txtD2 text-xs">Securely Checkout Now</p>
        </div>
      </section>
      {/* devider section */}
      <section className="flex items-center lg:mt-[-10%]">
        <div className=" hidden lg:block">------------</div>
        <div className=" hidden md:block lg:hidden">------</div>
        <div className=" hidden md:block h-[15px] w-[15px] rounded-full bg-crdBD1"></div>
      </section>
      {/* Pickup product */}
      <section>
        <div className=" bg-crdBD1 h-[50px] w-[50px] md:h-[70px] md:w-[70px] lg:h-[130px] lg:w-[130px] rounded-full flex justify-center items-center text-txtD1 text-2xl lg:text-4xl  ">
          {truck}
        </div>
        <div className=" hidden lg:block my-[40px] text-center">
          <h2 className=" text-txtD1 text-sm font-bold mb-[10px]">
            Received Product
          </h2>
          <p className=" text-txtD2 text-xs">See the World Clearly</p>
        </div>
      </section>
    </main>
  );
};
