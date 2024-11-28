import { useState } from "react";
import {
  FaChevronDown,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import icon from "../assets/Home page (Register/icons_474161 2.png";

const Footer = () => {
  const [about, setabout] = useState(false);
  const [products, setproducts] = useState(false);
  const [discover, setdiscover] = useState(false);
  return (
    <section id="footer" className="mt-20">
      <div className="bg-primaryColor md:hidden text-white">
        <div className="flex p-7 gap-2 flex-col ">
          <div
            onClick={() => setabout((prv) => (prv = !prv))}
            className="about   flex justify-between"
          >
            <h1 className="font-poppins font-[460] text-[1rem]">About</h1>{" "}
            <FaChevronDown className={`${about ? "" : "rotate-180"}`} />
          </div>
          <ul className={`aboutdetail flex flex-col gap-2 underline  p-3 text-xs ${about ? "block" : "hidden"}`}>
            <li>About Us</li>
            <li>News & Blog</li>
            <li>Location</li>
            
          </ul>
          
          <div
            onClick={() => setproducts((prv) => (prv = !prv))}
            className=" flex justify-between"
          >
            <h1 className="products  font-poppins font-[460] text-[1rem]">
              Products
            </h1>{" "}
            <FaChevronDown className={`${products ? "" : "rotate-180"}`} />
          </div>
          <ul className={`productsdetail flex flex-col gap-2 underline  p-3 text-xs ${products ? "block" : "hidden"}`}>
            <li>Pricing</li>
            <li>Store</li>
            <li>Features</li>
            
          </ul>

          <div
            onClick={() => setdiscover((prv) => (prv = !prv))}
            className="discover   flex justify-between"
          >
            <h1 className="font-poppins font-[460] text-[1rem]">Discover</h1>{" "}
            <FaChevronDown className={`${discover ? "" : "rotate-180"}`} />
          </div>
          <ul className={`discoverdetail flex  flex-col gap-2 underline  p-3 text-xs ${discover ? "block" : "hidden"}`}>
            <li>Contact Us</li>
            <li>Customers</li>
            <li>Affiliates</li>
            
          </ul>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <hr className="bg-white opacity-100 my-3 w-[80%] " />
          <div className="flex my-3 gap-[.5px]">
            <div className="border-4 border-transparent border-t-white border-r-white rounded-lg h-[1.69rem] w-[1.01rem]"></div>
            <div className="border-4 border-transparent border-t-white border-l-white rounded-lg h-[1.69rem] w-[1.01rem]"></div>
          </div>
          <div className="flex mt-5 mb-5 justify-center gap-3 w-[60%]">
            <FaInstagram className="text-xl" />
            <FaWhatsapp className="text-xl" />
            <FaXTwitter className="text-xl" />
          </div>
        </div>
        <div></div>
      </div>


      <div className="bg-primaryColor max-md:hidden flex justify-between px-20 text-white">
       <div className="flex flex-col justify-center items-center">
<img src={icon} alt="" />
<div className="flex mt-5 mb-5 justify-center gap-3 w-[60%]">
            <FaInstagram className="text-xl" />
            <FaWhatsapp className="text-xl" />
            <FaXTwitter className="text-xl" />
          </div>
       </div>
       <div className="flex font-poppins font-[400] text-[24px] justify-center gap-16 items-center">
        <ul>
          <li className="font-poppins font-[700] text-[28px]">About</li>
          <li>About Us</li>
            <li>News & Blog</li>
            <li>Location</li>
        </ul>
        <ul>
          <li className="font-poppins font-[700] text-[28px]">Products</li>
          <li>Pricing</li>
            <li>Store</li>
            <li>Features</li>

        </ul>
        <ul>
          <li className="font-poppins font-[700] text-[28px]">Discover</li>
          <li>Contact Us</li>
            <li>Customers</li>
            <li>Affiliates</li>
            
        </ul>
       </div>
      </div>
    </section>
  );
};

export default Footer;
