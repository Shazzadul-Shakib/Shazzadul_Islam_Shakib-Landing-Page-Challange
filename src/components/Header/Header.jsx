import logo from "../../assets/Logo.png";
import { allIcons } from "../../data/All-icons";
import { useToggle } from "../../hooks/useToggle";
import useCartStore from "../../store/useCartStore";
import ProductCartcard from "../Cards/ProductCart/ProductCartcard";
import ModalBody from "../Modalbody/ModalBody";

const Header = () => {
  const productCart = useCartStore((state) => state.cart);
  const [isModalOpen, setIsModalOpen, _] = useToggle();
  const { cart, profile } = allIcons;

  return (
    <main className=" hidden lg:flex  items-center justify-between my-[30px] mx-[90px]">
      {/* Logo */}
      <section>
        <img className=" h-[47px] w-[194px]" src={logo} alt="Eyeglass logo" />
      </section>

      {/* Navigation Items */}
      <section>
        <ul className="flex items-center gap-[30px] text-txtD1">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">About Us</li>
          <li className=" cursor-pointer">Products</li>
          <li className=" cursor-pointer">Features</li>
          <li className=" cursor-pointer">Reviews</li>
          <li className=" cursor-pointer">Contact Us</li>
        </ul>
      </section>

      {/* cart and profile Icons */}
      <section className=" flex gap-5 text-[22px] text-txtD1">
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

export default Header;
