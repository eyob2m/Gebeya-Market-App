import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import {  MdMenu } from "react-icons/md";
import img from "../assets/images/bag.jpg";
import us from "../assets/Home page (Register/united kingdom.png";
  

import { Link } from "react-router-dom";
import { RiSearchLine, RiShoppingBagLine } from "react-icons/ri";
import { FaAngleDown, FaAngleUp, FaUser } from "react-icons/fa6";
const Nav = () => {
  const [sidemenu, setsidemenu] = useState(false);
  const [more, setmore] = useState(false);
    const [reg, setreg] = useState(false);
  return (
   <div>
     <header className="md:hidden relative md:text-[0.6rem] md:gap-5  flex px-4 py-2 md:py-1 items-center bg-white  justify-between">
      <MdMenu onClick={() => setsidemenu(!sidemenu)} size={25} className="md:hidden"/>
    <Link to={'/'}>
    <h1 className="mb-3 text-5xl ">ገ</h1></Link>
      <div
        className={`absolute md:relative md:left-0 md:w-full w-[50%] duration-300 ${
          sidemenu ? "left-0" : "-left-[60%]"
        } overflow-hidden font-poppins font-[400] md:text-[0.65rem] text-[0.75rem]   top-0`}
      >
        <div className="sidemenu md:flex md:items-center bg-white">
          <div className="flex items-baseline  p-3   justify-between ">
            <IoMdClose onClick={() => setsidemenu(!sidemenu)} size={25} className="md:hidden" />{" "}
            <h1 className="  text-5xl md:hidden">ገ</h1>
          </div>
          <hr className="my-2  bg-black" />
          <div className="flex items-center">
            {" "}
            <h1 className="px-4 py-2 md:text-nowrap font-[500]"> Register/Sign up</h1>{" "}
            <GrNext className="-mr-2 md:hidden" />
            <FaAngleDown  className="-mr-2 max-md:hidden" />
          </div>{" "}
          <hr className="my-2  bg-black" />
          <div className="md:flex">
            <h1 className="px-4 py-2 md:hidden">Our Categories</h1>
            <h1 className="px-4 py-2 max-md:hidden">Home</h1>
            <h1 className="px-4 py-2">Men</h1>
            <h1 className="px-4 py-2">Women</h1>
            <h1 className="px-4 py-2">Kids</h1>
            <h1 className="px-4 py-2">Accessories</h1>
            <h1 className="px-4 py-2 flex items-center gap-2">
              More <FaAngleDown />
            </h1>
          </div>
          <hr className="my-2  bg-black" />
          <div className="px-4  items-center py-2 flex gap-2">
            <img src={us} className="w-8 rounded-[100%] h-8" alt="" />{" "}
            <h1>EN/Currency</h1>    <GrNext className="-mr-2 md:hidden" />
            <FaAngleDown  className="-mr-2 max-md:hidden" />
         
          </div>
        </div>
      </div>
      <div className="flex md:w-[250px]  md:relative gap-2 border-solid px-3 border rounded-3xl md:overflow-hidden border-gray-600 text-black items-center">
        <RiSearchLine />
        <input
          placeholder="Search..."
          className="py-1  activ:border-none active:outline-none focus:border-none focus:outline-none  bg-transparent placeholder:text-gray-400"
          type="text"
        />
        <div className="md:absolute max-md:hidden h-full right-0 flex items-center text-white justify-center w-[30%] bg-primaryColor">
        <RiSearchLine size={17} />
        </div>
      </div>
      <Link to={'/cart'}>
      <RiShoppingBagLine
        className="bg-black md:h-6 md:bg-primaryColor text-white rounded-full p-1"
        size={29}
      /></Link>
     

      
    </header>
    <header className="max-md:hidden  relative md:text-[0.6rem] md:gap-5  flex px-8 py-2 md:py-1 items-center bg-white  justify-between">
      <MdMenu onClick={() => setsidemenu(!sidemenu)} size={25} className="md:hidden"/>
    <Link to={'/'}>
    <h1 className="mb-3 text-5xl ">ገ</h1></Link>
      
          <div className="md:flex text-base">
          
          <div onClick={()=>setreg(!reg)} className="flex  relative cursor-pointer items-center">
            {" "}
            <FaUser />
            <h1 className="px-4 py-2 md:text-nowrap font-[500]"> Register/Sign up</h1>{" "}
       

            { ! reg? <FaAngleDown className="-ml-2 max-md:hidden"/> : <FaAngleUp className="-ml-2 max-md:hidden" /> }<div className={`z-20 list w-[100%] bg-white absolute top-[100%] left-0 ${reg ? 'block': 'hidden'}`}>
                <h1 className="p-2 font-[500]">Register</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Signup</h1>
          
              </div>
              </div>{" "}
            <h1 className="px-4  py-2 max-md:hidden">Home</h1>
            <h1 className="px-4 py-2">Men</h1>
            <h1 className="px-4 py-2">Women</h1>
            <h1 className="px-4 py-2">Kids</h1>
            <h1 className="px-4 py-2">Accessories</h1>
            <h1 onClick={()=>setmore(!more)} className="cursor-pointer px-4 relative py-2 flex items-center gap-2">
              More { !more ? <FaAngleDown /> : <FaAngleUp /> }<div className={`z-20 list w-[160%] bg-white absolute top-[100%] left-0 ${more ? 'block': 'hidden'}`}>
                <h1 className="p-2 font-[500]">Perfumes</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Jewelries</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Gym wears</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Vintage wears</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Sport wears</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Pyjamas</h1>
                <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
                <h1 className="p-2 font-[500]">Slippers</h1>
              </div>
            </h1>

          </div>
       <div className="flex md:w-[275px]  md:relative gap-2 border-solid px-3 border rounded-3xl md:overflow-hidden border-gray-600 text-black items-center">
        <RiSearchLine />
        <input
          placeholder="Search..."
          className="py-2 text-base activ:border-none active:outline-none focus:border-none focus:outline-none  bg-transparent placeholder:text-gray-400"
          type="text"
        />
        <div className="md:absolute max-md:hidden h-full right-0 flex items-center text-white justify-center w-[30%] bg-primaryColor">
        <RiSearchLine size={17} />
        </div>
      </div>
          <div className=" text-base  items-center py-2 flex gap-2">
            <img src={us} className="w-8 rounded-[100%] h-8" alt="" />{" "}
            <h1>EN/Currency</h1>    <GrNext className="-mr-2 md:hidden" />
            <FaAngleDown  className="-mr-2 max-md:hidden" />
         
          </div>
       
     
      
      <Link className="relative" to={'/cart'}>
      <RiShoppingBagLine
        className="bg-black   md:bg-primaryColor text-white rounded-full p-2"
        size={32}
      />
      <div className="absolute -right-1 -top-3 rounded-full flex justify-center items-center text-white p-1 h-[60%] w-[60%] bg-red-500">2</div></Link>
     

      
    </header>
    
   </div>
  );
};

export default Nav;
