import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/4.jpg";
import Slider from "react-slick";

import latestCollectionCard from "../components/latestCollectionCard";
import { latestCollections } from "../data/latestCollections";
import { categoryLists } from "./../data/categoryLists";
import { useState } from "react";
import categoryCard from "../components/categoryCard";
import { browserCategories } from "../data/browserCategories";
import browserCategoryCard from "../components/browserCategoryCard";
import { GrNext } from "react-icons/gr";

import Footer from "./../components/footer";
import Nav from "../components/nav";

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
    <div className="w-screen  overflow-x-hidden">
      {/* navigation */}
      <Nav />
      {/* Hero section */}
      <section
        id="hero-section"
        className="py-4  h-[373px] font-extrabold font-serif bg-primaryColor text-white"
      >
        <div
          className="flex font-alfa text-[2rem] font-[400] 
 p-5 gap-4 items-center"
        >
          <h1 className="flex-1 self-start">TIMBU</h1>
          <div className="w-[100px] h-[100px]">
            <img src={img} className="rounded-[50%] h-full  w-full" alt="" />
          </div>
          <h1 className="flex-1 self-end">SHOP</h1>
        </div>
        <div className="px-5">
          <p className="p-8 font-poppins font-[400] text-[0.75rem] text-center">
          Discover a world of convenience with our user-friendly platform, curaated collections, and exceptional customer service</p>

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
          <button className=" rounded-lg flex items-center  px-6 py-2 bg-[#9847EF]  text-[1rem] font-poppins font-[500] text-white">
            See more
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
            Our Curated Summer Collection
            </h1>
            <h2 className="text-[0.875rem] font-poppins font-[400] text-primaryColor">
            Explore our curated summer collection featuring trending styles, vibrant colors and lightweight fabrics perfect for long days and nights.</h2>
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
      <Footer />
    </div>
  );
}

export default Home;
