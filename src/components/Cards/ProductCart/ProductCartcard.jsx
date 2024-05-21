import { allIcons } from "../../../data/All-icons";
import useCartStore from "../../../store/useCartStore";
import CartedProduct from "./CartedProduct";

const ProductCartcard = ({ close }) => {
  const productCart = useCartStore((state) => state.cart);
  const { cross } = allIcons;

  return (
    <main className=" bg-crdBD3L2 p-10 rounded w-[90%] md:w-[60%]">
      <div className=" text-3xl flex justify-between items-center -mt-5 -mr-6">
        <h1>Cart List</h1>
        <div onClick={close} className=" text-red-600 cursor-pointer">
          {cross}
        </div>
      </div>
      <hr className=" my-[15px]" />
      <p className=" text-sm text-txtD2 pb-4">
        You have listed items: {productCart.length}
      </p>
      {/* Cart list */}
      <section className=" h-[calc(100dvh-330px)] overflow-auto">
        {productCart.map((product) => (
          <CartedProduct key={product.productId}  product={product} />
        ))}
      </section>
    </main>
  );
};

export default ProductCartcard;
