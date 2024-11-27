import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import {  MdMenu } from "react-icons/md";
import img from "../assets/4.jpg";
import { RiSearchLine, RiShoppingBagLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
const Nav = () => {
  const [sidemenu, setsidemenu] = useState(false);
  return (
    <header className="relative flex px-4 py-2 items-center bg-white  justify-between">
      <MdMenu onClick={() => setsidemenu(!sidemenu)} size={25} />
      <h1 className="mb-3 text-5xl ">ገ</h1>
      <div className="flex gap-2 border-solid px-3 border rounded-3xl border-gray-600 text-black items-center">
        <RiSearchLine />
        <input
          placeholder="Search..."
          className="py-1  activ:border-none active:outline-none focus:border-none focus:outline-none  bg-transparent placeholder:text-gray-400"
          type="text"
        />
      </div>
      <RiShoppingBagLine
        className="bg-black text-white rounded-full p-1"
        size={29}
      />

      <div
        className={`absolute w-[50%]   duration-300 ${
          sidemenu ? "left-0" : "-left-[60%]"
        } overflow-hidden font-poppins font-[400] text-[0.75rem]   top-0`}
      >
        <div className="sidemenu  bg-white">
          <div className="flex items-baseline  p-3   justify-between ">
            <IoMdClose onClick={() => setsidemenu(!sidemenu)} size={25} />{" "}
            <h1 className="  text-5xl ">ገ</h1>
          </div>
          <hr className="my-2  bg-black" />
          <div className="flex items-center">
            {" "}
            <h1 className="px-4 py-2 font-[500]"> Register/Sign up</h1>{" "}
            <GrNext className="-mr-2" />
          </div>{" "}
          <hr className="my-2  bg-black" />
          <div className="">
            <h1 className="px-4 py-2">Our Categories</h1>
            <h1 className="px-4 py-2">Men</h1>
            <h1 className="px-4 py-2">Women</h1>
            <h1 className="px-4 py-2">Kids</h1>
            <h1 className="px-4 py-2">Accessories</h1>
            <h1 className="px-4 py-2 flex items-center gap-2">
              More <FaAngleDown />
            </h1>
          </div>
          <hr className="my-2  bg-black" />
          <div className="px-4 items-center py-2 flex gap-2">
            <img src={img} className="w-8 rounded-[100%] h-8" alt="" />{" "}
            <h1>EN/Currency</h1> <GrNext className="-mr-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
