const Products = () => {
  return (
    <main className=" m-[30px] lg:my-[127px] lg:mx-[240px]">
      {/* Header section of Products */}
      <h1 className=" text-center text-3xl font-bold text-txtD1 mb-[20px] md:text-start">
        Our Products
      </h1>
      <section className=" flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className=" text-sm text-txtD2 ">
            Experience crystal clear vision and elevated style with{" "}
            <br className=" hidden md:block" />
            our premium collection of eyeglasses.
          </p>
        </div>
        <div className=" flex items-center gap-[30px] mt-4 md:mt-0">
          <div className=" cursor-pointer">Latest</div>
          <div className=" cursor-pointer border border-txtD2 px-[20px] py-[5px] rounded">
            Special
          </div>
          <div className="cursor-pointer">Best sell</div>
        </div>
      </section>

      {/* Cards section */}
      <section></section>
    </main>
  );
};

export default Products;
