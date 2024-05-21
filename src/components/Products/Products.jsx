import ProductCard from "../Cards/productCard/ProductCard";
import { ProductsData } from "../../../public/productsData";
import useCartStore from "../../store/useCartStore";

const Products = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  
  return (
    <main className=" m-[30px] lg:my-[127px] lg:mx-[30px] xl:mx-[200px]">
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
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-[30px] my-[60px]">
        {ProductsData?.map((product) => (
          <ProductCard
            key={product.productId}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </section>
    </main>
  );
};

export default Products;
