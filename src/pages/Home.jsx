import { BiCart, BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/4.jpg";
import Slider from "react-slick";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
import latestCollectionCard from "../components/latestCollectionCard";
import { latestCollections } from "../data/latestCollections";
import { categoryLists } from "./../data/categoryLists";
import { useState } from "react";
import categoryCard from "../components/categoryCard";
import { browserCategories } from "../data/browserCategories";
import browserCategoryCard from "../components/browserCategoryCard";

function Home() {
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
    <div className="w-screen overflow-x-hidden">
      <header className="flex px-4 py-2 items-center bg-white  justify-between">
        <MdMenu size={25} />
        <h1 className="  text-5xl ">ገ</h1>
        <div className="flex gap-2 border-solid px-3 border rounded-3xl border-gray-600 text-black items-center">
          <BiSearch />
          <input
            placeholder="search..."
            className="py-1 activ:border-none active:outline-none focus:border-none focus:outline-none  bg-transparent placeholder:text-gray-400"
            type="text"
          />
        </div>
        <BiCart size={25} />
      </header>
      {/* Hero section */}
      <section
        id="hero-section"
        className="py-4 font-extrabold font-serif bg-primaryColor text-white"
      >
        <div className="flex p-5 gap-0 items-center">
          <h1 className="flex-1 text-3xl self-start">TIMBU</h1>
          <div className="w-[100px] h-[100px]">
            <img src={img} className="rounded-[50%] h-full  w-full" alt="" />
          </div>
          <h1 className="flex-1 text-[32px] self-end">SHOP</h1>
        </div>
        <div className="px-5">
          <p className="p-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quos
            nam quasi quibusdam sint culpa!
          </p>

          <button className="rounded-md py-2 bg-buttonColor w-full">
            Explore Now
          </button>
        </div>
      </section>
      {/* Latest collection */}
      <section id="latest-collections">
        <h1 className="p-5 font-poppins font-[600] text-[18px]">
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
          <button className=" rounded-lg  px-8 py-3 bg-primaryColor  text-[14px] font-poppins font-[500] text-white">
            See more
          </button>
        </div>
      </section>
      {/* Explore section */}
      <section id="explore-section" className="p-4">
        <div className=" p-4 bg-[#D0D0D0] relative">
          <div className=" flex flex-col gap-3 ">
            <h1 className="text-[18px] font-poppins font-[600] text-primaryColor">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <h2 className="text-[14px] font-poppins font-[400] text-primaryColor">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              aperiam minima adipisci, nihil tenetur iure voluptatibus
              cupiditate dolorum praesentium quaerat hic aspernatur optio
              aliquam facilis beatae?
            </h2>
          </div>
          <div className="w-full flex justify-center">
            <button className="rounded-lg py-2 mt-6 bg-buttonColor text-white w-[80%]">
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
            <div className="flex justify-between">
              {" "}
              <h1>About</h1> <h1>^</h1>
            </div>
            <div className="flex justify-between">
              {" "}
              <h1>About</h1> <h1>^</h1>
            </div>
            <div className="flex justify-between">
              {" "}
              <h1>About</h1> <h1>^</h1>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <hr className="bg-white opacity-65 my-3 w-[80%] " />
            <h1 className="text-3xl"> ገና</h1>
            <div className="flex mt-5 mb-5 justify-center gap-3 w-[60%]">
              <FaFacebook className="text-xl" />
              <FaWhatsapp className="text-xl" />
              <CgTwitter className="text-xl" />
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
