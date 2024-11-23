import { BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/4.jpg";
import Slider from "react-slick";
import { FaChevronDown, FaInstagram, FaWhatsapp } from "react-icons/fa";
import latestCollectionCard from "../components/latestCollectionCard";
import { latestCollections } from "../data/latestCollections";
import { categoryLists } from "./../data/categoryLists";
import { useState } from "react";
import categoryCard from "../components/categoryCard";
import { browserCategories } from "../data/browserCategories";
import browserCategoryCard from "../components/browserCategoryCard";
import { GrNext } from "react-icons/gr";
import { FaBagShopping, FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Home() {
  const [about, setabout] = useState(false);
  const [sidemenu, setsidemenu] = useState(false);
  const [products, setproducts] = useState(false);
  const [discover, setdiscover] = useState(false);
  const [categorySelected, setcategorySelected] = useState("Men");

  let settings = {
    speed: 300,
    dots: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  let settings2 = {
    speed: 300,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className={`w-screen  overflow-x-hidden`}>
      <header className="relative flex px-4 py-2 items-center bg-white  justify-between">
        <MdMenu onClick={() => setsidemenu(!sidemenu)} size={25} />
        <h1 className="mb-3 text-5xl ">ገ</h1>
        <div className="flex gap-2 border-solid px-3 border rounded-3xl border-gray-600 text-black items-center">
          <BiSearch />
          <input
            placeholder="search..."
            className="py-1  activ:border-none active:outline-none focus:border-none focus:outline-none  bg-transparent placeholder:text-gray-400"
            type="text"
          />
        </div>
        <FaBagShopping
          className="bg-black text-white rounded-full p-1"
          size={29}
        />

        <div
          className={`absolute   duration-300 ${
            sidemenu ? "w-full " : "w-0"
          } overflow-hidden font-poppins font-[400] text-[0.75rem]  left-0 top-0`}
        >
          <div className="w-[50%] sidemenu  bg-white">
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
              <h1 className="px-4 py-2">More </h1>
            </div>
            <hr className="my-2  bg-black" />
            <div className="px-4 items-center py-2 flex gap-2">
              <img src={img} className="w-8 rounded-[100%] h-8" alt="" />{" "}
              <h1>EN/Currency</h1> <GrNext className="-mr-2" />
            </div>
          </div>
        </div>
      </header>
      {/* Hero section */}
      <section
        id="hero-section"
        className="py-4  h-[373px] font-extrabold font-serif bg-primaryColor text-white"
      >
        <div className="flex p-5 gap-0 items-center">
          <h1 className="flex-1 text-[2rem] font-alfa font-[400] self-start">
            TIMBU
          </h1>
          <div className="w-[100px] h-[100px]">
            <img src={img} className="rounded-[50%] h-full  w-full" alt="" />
          </div>
          <h1 className="flex-1 text-[2rem] font-alfa font-[400] self-end">
            SHOP
          </h1>
        </div>
        <div className="px-5">
          <p className="p-8 font-poppins font-[400] text-[0.75rem] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos
            nam quasi quibusdam sint culpa!
          </p>

          <button className="rounded-md font-poppins font-[500] text-[1rem] py-2 bg-buttonColor w-full">
            Explore Now
          </button>
        </div>
      </section>
      {/* Latest collection */}
      <section id="latest-collections">
        <h1 className="p-5 font-poppins font-[600] text-[1.125rem] text-[#1E1E1E]">
          Latest Collections
        </h1>

        <Slider {...settings}>
          {latestCollections.map((col) => {
            return latestCollectionCard({ ...col });
          })}
        </Slider>
      </section>
      {/* Category Menu lists */}
      <section id="category-menu-lists" className="w-screen my-10 ">
        <div className="p-3 overflow-x-scroll flex gap-5">
          {Object.entries(categoryLists).map(([key, val]) => {
            return (
              <button
                onClick={() => setcategorySelected(key)}
                className={`${
                  categorySelected == key
                    ? "bg-buttonColor border-0 text-white"
                    : "bg-transparent"
                } rounded-3xl py-2 px-5  font-poppins border border-[#C1C1C1] text-[#1E1E1E]  text-[16px] font-[600]`}
                key={val}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="grid  grid-cols-2">
          {categoryLists[categorySelected].map((items) => {
            return categoryCard(items);
          })}
        </div>
        <div className="w-full mt-4 flex justify-center">
          <button className=" rounded-lg flex items-center  px-8 py-3 bg-primaryColor  text-[1rem] font-poppins font-[500] text-white">
            See more{" "}
            <span className=" flex">
              <GrNext className="-mr-2" />
              <GrNext className="-mr-2" />
              <GrNext className="-mr-2" />
            </span>
          </button>
        </div>
      </section>
      {/* Explore section */}
      <section id="explore-section" className="p-4">
        <div className=" p-4 bg-[#D0D0D0] relative">
          <div className=" flex flex-col gap-3 ">
            <h1 className="text-[1.125rem] font-poppins font-[600] text-primaryColor">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <h2 className="text-[0.875rem] font-poppins font-[400] text-primaryColor">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              aperiam minima adipisci, nihil tenetur iure voluptatibus
              cupiditate dolorum praesentium quaerat hic aspernatur optio
              aliquam facilis beatae?
            </h2>
          </div>
          <div className="w-full flex justify-center">
            <button className="rounded-lg py-2 mt-6 font-poppins font-[400] bg-buttonColor  text-white w-[80%]">
              Explore Now
            </button>
          </div>
          <div className="absolute right-8 top-10 w-4 h-4 bg-primaryColor rounded-full"></div>
          <div className="absolute right-20 top-11 w-3 h-3 bg-primaryColor rounded-full"></div>
          <div className="absolute right-40 top-24 w-3 opacity-35 h-3 bg-primaryColor rounded-full"></div>
          <div className="absolute right-40 top-48 w-6 opacity-60 h-6 bg-primaryColor rounded-full"></div>
          <div className="absolute right-20 top-48 w-3 opacity-60 h-3 bg-primaryColor rounded-full"></div>
        </div>
      </section>
      {/* Browser categories */}
      <section id="browser-categories">
        <h1 className="p-5 font-poppins font-[600] text-[18px]">
          Browser by category
        </h1>
        <Slider {...settings2}>
          {browserCategories.map((items) => {
            return browserCategoryCard(items);
          })}
        </Slider>
      </section>
      {/* Footer */}
      <section id="footer" className="mt-20">
        <div className="bg-primaryColor text-white">
          <div className="flex p-7 gap-2 flex-col ">
            <div
              onClick={() => setabout((prv) => (prv = !prv))}
              className="about   flex justify-between"
            >
              <h1 className="font-poppins font-[460] text-[1rem]">About</h1>{" "}
              <FaChevronDown className={`${about ? "" : "rotate-180"}`} />
            </div>
            <h1
              className={`aboutdetail  p-3 text-sm ${
                about ? "block" : "hidden"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
              reiciendis exercitationem nulla!
            </h1>
            <div
              onClick={() => setproducts((prv) => (prv = !prv))}
              className=" flex justify-between"
            >
              <h1 className="products  font-poppins font-[460] text-[1rem]">
                Products
              </h1>{" "}
              <FaChevronDown className={`${products ? "" : "rotate-180"}`} />
            </div>
            <h1
              className={`productsdetail  p-3 text-sm ${
                products ? "block" : "hidden"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
              reiciendis exercitationem nulla!
            </h1>

            <div
              onClick={() => setdiscover((prv) => (prv = !prv))}
              className="discover  flex justify-between"
            >
              <h1 className="font-poppins font-[460] text-[1rem]">Discover</h1>{" "}
              <FaChevronDown className={`${discover ? "" : "rotate-180"}`} />
            </div>
            <h1
              className={`discoverdetail  p-3 text-sm ${
                discover ? "block" : "hidden"
              }`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
              reiciendis exercitationem nulla!
            </h1>
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
      </section>
    </div>
  );
}

export default Home;
