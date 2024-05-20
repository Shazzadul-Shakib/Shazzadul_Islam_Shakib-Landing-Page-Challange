import logo from "../../assets/Logo.png";
import { allIcons } from "../../data/All-icons";

const FooterSm = () => {
  const { linkedin, instagram, twitter } = allIcons;
  return (
    <main className="mx-5 mt-10 lg:hidden">
      {/* Upper body */}
      <section className=" flex flex-col items-center">
        {/* Logo and Icon section */}
        <div className=" flex flex-col items-center gap-[10px]">
          <div>
            <img className=" h-[27px]" src={logo} alt="Logo" />
          </div>
          <div>
            <p className="text-center text-sm text-balance">
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
        <div className=" flex items-center gap-[25px] my-5">
          {/* Support */}
          <div>
            <h1 className="  font-bold mb-[20px]">Support</h1>

            <ul className=" flex flex-col gap-[6px] text-xs">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Product FAQs</li>
              <li>Company Support</li>
              <li>Manage Account</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h1 className="  font-bold mb-[20px]">Quick Links</h1>

            <ul className=" flex flex-col gap-[6px] text-xs">
              <li>About Us</li>
              <li>Blog Post</li>
              <li>Product Features</li>
              <li>Company Info</li>
              <li>Employee Info</li>
            </ul>
          </div>

          {/* community  */}
          <div>
            <h1 className="  font-bold mb-[20px]">Community</h1>

            <ul className=" flex flex-col gap-[6px] text-xs">
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
      <section className=" text-xs flex flex-col justify-between items-center gap-2 my-[20px]">
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

export default FooterSm;
