import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/images/men_suit.jpg";
import Slider from "react-slick";
import men from "../assets/Home page (Register/Ellipse 3.png";
  import le from "../assets/Home page (Register/Ellipse 5.png";
  import ri from "../assets/Home page (Register/Ellipse 4.png";
  

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
import { MdMenu } from "react-icons/md";
import { FcNext } from "react-icons/fc";
import { categoryListsP } from "../data/catPhone";

const Next = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div  className="absolute -top-[60px] p-2 right-10 bg-buttonColor rounded-r-3xl"   onClick={onClick} >
     <FcNext />
    </div>
  );
};
const Prev = (props) => {
  const { onClick } = props;
  return (
    <div  className="absolute -top-[60px] p-2 right-24 rotate-180 bg-buttonColor rounded-r-3xl"   onClick={onClick} >
     <FcNext />
    </div>
  );
};

function Home() {
  const [categorySelected, setcategorySelected] = useState("Women");

  let settings = {
    speed: 300,
    dots: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  let settings3 = {
    speed: 300,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  let settings2 = {
    speed: 300,
  
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  let settings4 = {
    speed: 300,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  
    slidesToScroll: 1,
    slidesToShow: 4,

  };

  return (
    <div className="w-screen  overflow-x-hidden">
      {/* navigation */}
      <Nav />
      {/* Hero section */}
      <section
        id="hero-section"
        className="py-4 md:h-fit h-[373px] md:relative md:pt-10  font-extrabold font-serif bg-primaryColor text-white"
      >
        <div
          className="flex font-alfa text-[2rem] md:text-[128px] font-[400] 
 p-5 gap-4 md:gap-8 items-center"
        >
          <div className="flex-1 md:flex md:flex-col md:items-center self-start">
            <h1 className="flex-1  md:self-center self-start">Gebeya</h1>
            <div className="w-[223px] md:h-[223px] max-md:hidden">
              <img src={le} className="rounded-[50%] h-full  w-full" alt="" />
            </div>
          </div>
          <div className="w-[100px] md:self-start md:h-[300px] md:w-[300px] h-[100px]">
            <img src={men} className="rounded-[50%] h-full  w-full" alt="" />
          </div>
          <div className="flex-1 md:flex md:flex-col md:items-start  self-end">
            <p className="max-md:p-8 md:text-[20px] max-md:hidden font-poppins font-[400] text-start text-[1.45rem] ">
              Discover a world of convenience with our user-friendly platform,
              curaated collections, and exceptional customer service
            </p>
            <h1 className="flex-1 self-start">SHOP</h1>
            <div className="w-[223px] md:h-[223px] max-md:hidden">
              <img src={ri} className="rounded-[50%] h-full  w-full" alt="" />
            </div>
          </div>
        </div>
        <div className="px-5 md:w-full md:flex md:justify-center">
          <p className="p-8 md:hidden font-poppins font-[400] text-[0.75rem] text-center">
            Discover a world of convenience with our user-friendly platform,
            curaated collections, and exceptional customer service
          </p>

          <button className="rounded-md md:text-[24px] mb-10 md:px-20 md:w-fit font-poppins font-[500] text-[1rem] py-2 bg-buttonColor w-full">
            Explore Now
          </button>
        </div>
      </section>
      {/* Latest collection */}
      <section className="max-md:hidden md:my-20 md:px-20" id="latest-collections ">
        <h1 className="p-5 md:text-[40px] md md:font-[600] font-poppins font-[600] text-[1.125rem] text-[#1E1E1E]">
          Latest Collections
        </h1>

       <div>
       <Slider  {...settings3}>
          {latestCollections.map((col) => {
            return latestCollectionCard({ ...col });
          })}
        </Slider>
       </div>
      </section>
      <section className="md:hidden" id="latest-collections ">
        <h1 className="p-5 font-poppins font-[600] text-[1.125rem] text-[#1E1E1E]">
          Latest Collections
        </h1>

        <Slider  {...settings}>
          {latestCollections.map((col) => {
            return latestCollectionCard({ ...col });
          })}
        </Slider>
      </section>
      {/* Category Menu lists */}
      <section id="category-menu-lists" className="w-screen md:my-8 my-10 ">
        <div className="p-3 md:px-24 overflow-x-scroll md:w-full flex md:justify-between gap-5">
          {Object.entries(categoryLists).map(([key, val]) => {
            return (
              <button
                onClick={() => setcategorySelected(key)}
                className={`${
                  categorySelected == key
                    ? "bg-buttonColor border-0 text-white"
                    : "bg-transparent"
                } rounded-3xl py-2 px-5 md:w-full md:py-3  font-poppins border border-[#C1C1C1] text-[#1E1E1E]  text-[16px] font-[600]`}
                key={val}
              >
                {key}
              </button>
            );
          })}
        </div>
        <div className="grid md:px-24 md:hidden md:grid-cols-6  grid-cols-2">
          {categoryListsP[categorySelected].map((items) => {
            return categoryCard(items);
          })}
        </div>
        <div className="grid max-md:hidden md:px-24 md:grid-cols-6  grid-cols-2">
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
      <section id="explore-section " className=" p-4 md:px-24">
        <div className="md:p-16 md:rounded-3xl  p-4 max-md:bg-[#D0D0D0] explore relative">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-[1.125rem] md:text-[40px] font-poppins font-[600] text-primaryColor">
              Our Curated Summer Collection
            </h1>
            <h2 className="text-[0.875rem] md:text-[24px] font-poppins md:w-[50%] font-[400] text-primaryColor">
              Explore our curated summer collection featuring trending styles,
              vibrant colors and lightweight fabrics perfect for long days and
              nights.
            </h2>
          </div>
          <div className="w-full flex md:justify-start justify-center">
            <button className="md:text-start md:w-fit md:px-4 rounded-lg py-2 mt-6 font-poppins font-[400] bg-buttonColor  text-white w-[80%]">
              Explore Now
            </button>
          </div>
          <div className="absolute md:left-[40%] md:top-[70%] max-md:right-8 top-10 w-4 md:w-10 md:h-10 h-10 bg-buttonColor rounded-full"></div>
          <div className="absolute  md:left-[50%] md:top-[10%] right-20 top-11 w-6 h-6 bg-buttonColor rounded-full"></div>
         
          <div className="absolute md:left-[40%] max-md:right-8 top-10 w-4 md:w-8 md:h-8 h-4 bg-primaryColor rounded-full"></div>
          <div className="absolute  md:left-[70%] md:top-[40%] right-20 top-11 w-3 h-3 bg-primaryColor rounded-full"></div>
          <div className="absolute right-40 top-24 w-3 md:left-[40%] md:top-[30%] opacity-35 h-3 bg-primaryColor rounded-full"></div>
          <div className="absolute right-40 top-32 w-6 opacity-60 h-6 md:left-[50%] md:top-[60%] bg-primaryColor rounded-full"></div>
          <div className="absolute right-20 top-30 w-3 opacity-60 h-3 bg-primaryColor md:left-[80%] md:top-[60%] rounded-full"></div>
        </div>
      </section>
      {/* Browser categories */}
      <section id="browser-categories ">
        <h1 className="p-5  md:p-10 md:text-[40px] md:font-[600] md:px-24 font-poppins font-[600] text-[18px]">
          Browser by category
        </h1>
       <div  className="md:hidden ">
       <Slider  {...settings2}>
          {browserCategories.map((items) => {
            return browserCategoryCard(items);
          })}
        </Slider>
       </div>
       <div  className="max-md:hidden  md:p-16">
       <Slider  {...settings4}>
          {browserCategories.map((items) => {
            return browserCategoryCard(items);
          })}
        </Slider>
       </div>
       
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
