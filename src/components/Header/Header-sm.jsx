import { useToggle } from "../../hooks/useToggle";
import { allIcons } from "../../data/All-icons";
import logo from "../../assets/Logo.png";
import useCartStore from "../../store/useCartStore";
import ProductCartcard from "../Cards/ProductCart/ProductCartcard";
import ModalBody from "../Modalbody/ModalBody";

const HeaderSm = () => {
  const productCart = useCartStore((state) => state.cart);
  const [isOpen, _, Toggle] = useToggle();
  const [isModalOpen, setIsModalOpen, __] = useToggle();
  const { cart, profile, menu } = allIcons;

  return (
    <main className="relative flex  items-center justify-between my-4 mx-6 lg:hidden">
      {/* Toggle menu bar */}
      <section>
        <div onClick={Toggle} className=" text-4xl text-txtD1">
          {menu}
        </div>
        {/* Navigation Items */}
        {isOpen && (
          <section className="absolute z-20 w-full bg-prC1 p-4 rounded-lg text-txtD1 font-semibold mt-2 ">
            <ul className="flex flex-col items-center gap-[30px]">
              <li className=" cursor-pointer">Home</li>
              <li className=" cursor-pointer">About Us</li>
              <li className=" cursor-pointer">Products</li>
              <li className=" cursor-pointer">Features</li>
              <li className=" cursor-pointer">Reviews</li>
              <li className=" cursor-pointer">Contact Us</li>
            </ul>
          </section>
        )}
      </section>

      {/* Logo */}
      <section>
        <img className=" h-[27px]" src={logo} alt="Eyeglass logo" />
      </section>

      {/* cart and profile Icons */}
      <section className=" flex gap-5 text-[20px] text-txtD1">
        <div
          onClick={() => setIsModalOpen(true)}
          className=" relative cursor-pointer"
        >
          <div className=" absolute -right-1 mt-[-7px] text-xs h-[15px] w-[15px] bg-crdBD2 text-txtL1 rounded-full flex justify-center items-center">
            {productCart.length}
          </div>
          <div>{cart}</div>
        </div>
        <div>{profile} </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <ModalBody
          modalcard={<ProductCartcard close={() => setIsModalOpen(false)} />}
        />
      )}
    </main>
  );
};

export default HeaderSm;
