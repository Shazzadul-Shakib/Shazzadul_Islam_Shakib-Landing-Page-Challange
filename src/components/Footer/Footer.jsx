import logo from "../../assets/Logo.png";
import { allIcons } from "../../data/All-icons";

const Footer = () => {
  const { linkedin, instagram, twitter } = allIcons;
  return (
    <main className=" hidden lg:block my-[30px] mx-[100px] xl:mx-[240px] ">
      {/* Upper body */}
      <section className=" flex items-center mb-[40px]">
        {/* Logo and Icon section */}
        <div className=" flex-1 flex flex-col gap-[30px] pr-10">
          <div>
            <img className=" h-[37px]" src={logo} alt="Logo" />
          </div>
          <div>
            <p className=" text-sm text-balance">
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampde
            </p>
          </div>
          <div className=" text-txtD1 flex items-center gap-[15px]">
            <div className="h-[30px] w-[30px] flex justify-center items-center text-[14px] border border-crdBD1 rounded-full">
              {linkedin}
            </div>
            <div className="h-[30px] w-[30px] flex justify-center items-center text-[14px] border border-crdBD1 rounded-full">
              {instagram}{" "}
            </div>
            <div className="h-[30px] w-[30px] flex justify-center items-center text-[14px] border border-crdBD1 rounded-full">
              {twitter}{" "}
            </div>
          </div>
        </div>

        {/* support and community part*/}
        <div className=" flex items-center gap-[84px]">
          {/* Support */}
          <div>
            <h1 className=" text-xl font-bold mb-[32px]">Support</h1>

            <ul className=" flex flex-col gap-[10px] text-xs">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Product FAQs</li>
              <li>Company Support</li>
              <li>Manage Account</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h1 className=" text-xl font-bold mb-[32px]">Quick Links</h1>

            <ul className=" flex flex-col gap-[10px] text-xs">
              <li>About Us</li>
              <li>Blog Post</li>
              <li>Product Features</li>
              <li>Company Info</li>
              <li>Employee Info</li>
            </ul>
          </div>

          {/* community  */}
          <div>
            <h1 className=" text-xl font-bold mb-[32px]">Community</h1>

            <ul className=" flex flex-col gap-[10px] text-xs">
              <li>Become an affiliate</li>
              <li>Help Center</li>
              <li>Product FAQs</li>
              <li>Our Fourms</li>
              <li>Product API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Copyrights section */}
      <section className=" text-sm flex justify-between items-center my-[32px]">
        <div>
          <p>Copyright © 2023 All rights reserved by Eyeglass</p>
        </div>
        <div className=" flex items-center gap-[30px]">
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
      </section>
    </main>
  );
};

export default Footer;
