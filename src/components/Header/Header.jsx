import logo from '../../assets/Logo.png';
import { allIcons } from '../../data/All-icons';

const Header = () => {
    const {cart,profile}=allIcons;

    return (
        <main className=' hidden lg:flex  items-center justify-between my-[30px] mx-[90px]'>
            {/* Logo */}
            <section>
                <img className=' h-[47px] w-[194px]' src={logo} alt="Eyeglass logo" />
            </section>

            {/* Navigation Items */}
            <section>
                <ul className='flex items-center gap-[30px] text-txtD1'>
                    <li className=' cursor-pointer'>Home</li>
                    <li className=' cursor-pointer'>About Us</li>
                    <li className=' cursor-pointer'>Products</li>
                    <li className=' cursor-pointer'>Features</li>
                    <li className=' cursor-pointer'>Reviews</li>
                    <li className=' cursor-pointer'>Contact Us</li>
                </ul>
            </section>

            {/* cart and profile Icons */}
            <section className=' flex gap-5 text-[22px] text-txtD1'>
                <div>{cart} </div>
                <div>{profile} </div>
            </section>
        </main>
    );
};

export default Header;