import { BiCart, BiSearch, BiStar } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "./assets/4.jpg";
import { HiHeart } from "react-icons/hi";
import { RiHeartLine } from "react-icons/ri";
import Slider from "react-slick";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CgTwitter } from "react-icons/cg";
function App() {
  let categories = ["Men", "Women", "Kids", "Perfume", "Bag"];
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
  let latestCard = (
    liked,
    image,
    stage,
    gfor,

    rating,
    title,
    sub,
    price,
    added
  ) => {
    return (
      <div className="p-3 ">
        <div className="border-solid w-[266px] border border-[#C1C1C1] rounded-md p-2">
          <div className="p-1  relative rounded-lg">
            <div className="relative bg-[#F2F2F2]">
              <img
                className="rounded-lg w- bg-[#F2F2F2] object-contain"
                src={image}
                alt=""
              />
              <div className="top-0 left-0 flex w-full px-5 py-2 justify-between absolute">
                <div className="flex justify-center items-center  bg-white p-1 rounded-full">
                  {liked ? <HiHeart /> : <RiHeartLine />}
                </div>
                <h1 className="flex justify-center items-center text-[10px] font-poppins font-[400]  bg-white px-1 rounded-full">
                  {stage}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between py-2 px-1">
            <h2 className="border border-[#808080] text-[#808080] px-2 rounded-2xl font-poppins font-[400]">
              {gfor}
            </h2>
            <div className="flex items-center text-[12px] font-poppins text-[#808080] font-[400]">
              <BiStar />
              <div>{rating}+ rating</div>
            </div>
          </div>
          <div className="mt-5 px-1">
            <h1 className="text-[16px] font-poppins font-[600]">{title}</h1>
            <h1 className="text-[12px] font-poppins font-[500] text-[#808080]">
              {sub}
            </h1>
            <div className="flex justify-between items-start">
              <h2 className="text-[16px] font-poppins font-[600] self-end">
                {price}
              </h2>
              <button
                className={` rounded-lg  px-4 py-3 ${
                  added ? "bg-gray-400" : "bg-buttonColor"
                }  text-[14px] font-poppins font-[500] text-white`}
              >
                {added ? "Remove from cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  let categoryCard = (image, title, desc) => {
    return (
      <div className="p-3 ">
        <div className="border-solid  border border-[#C1C1C1] rounded-md p-2">
          <div className="p-10 py-4  relative rounded-lg">
            <div className="relative bg-[#F2F2F2]">
              <img
                className="rounded-lg w- bg-[#F2F2F2] object-contain"
                src={image}
                alt=""
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center px-1">
            <div>
              <h1 className="text-[16px] font-poppins font-[600] text-[#000000]">
                {title}
              </h1>
            </div>
            <div className="flex justify-between items-start">
              <h2 className="text-[12px] text-center font-poppins font-[400] text-[#808080]">
                {desc}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  let broCategoryCard = (image, title, desc) => {
    return (
      <div className="p-3">
        <div className="   rounded-md p-2">
          <div className="p-8 py-8 mb-4 bg-[#F2F2F2] relative rounded-lg">
            <div className="relative bg-[#F2F2F2]">
              <img

                className="rounded-lg  bg-[#F2F2F2] object-contain"
                src={image}
                alt=""
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center px-1">
            <div>
              <h1 className="text-[16px] font-poppins font-[600] text-[#000000]">
                {title}
              </h1>
            </div>
            <div className="flex justify-between items-start">
              <h2 className="text-[12px] text-center font-poppins font-[400] text-[#808080]">
                {desc}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
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
      <section className="py-4 font-extrabold font-serif bg-primaryColor text-white">
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
      <section>
        <h1 className="p-5 font-poppins font-[600] text-[18px]">
          Latest Colections
        </h1>

        <Slider {...settings}>
          {latestCard(
            true,
            img,
            "In stock",
            "Women",

            "2.3k",
            "French KIss Bag",
            "ALDO",
            "$500",
            true
          )}
          {latestCard(
            false,
            img,
            "Sold",
            "Men",

            "3.3k",
            "Ethiopia KIss Bag",
            "ALDO",
            "$50",
            true
          )}
          {latestCard(
            true,
            img,
            "In Shipping",
            "Women",

            "2.3k",
            " KIss Bag",
            "ALDO",
            "$100",
            true
          )}
          {latestCard(
            true,
            img,
            "In stock",
            "Kids",

            "2.3k",
            "French KIss Bag",
            "ALDO",
            "$500",
            false
          )}
        </Slider>
      </section>
      <section className="w-screen my-10 ">
        <div className="p-3 overflow-x-scroll flex gap-5">
          {categories.map((c) => {
            return (
              <button
                className=" rounded-3xl py-2 px-5  font-poppins border border-[#C1C1C1] text-[#1E1E1E] text-[16px] font-[600]"
                key={c}
              >
                {c}
              </button>
            );
          })}
        </div>
        <div className="grid  grid-cols-2">
          {categoryCard(img, "Shoes", "This is description of the product")}
          {categoryCard(img, "Shoes", "This is description of the product")}
          {categoryCard(img, "Shoes", "This is description of the product")}
          {categoryCard(img, "Shoes", "This is description of the product")}
        </div>
        <div className="w-full mt-4 flex justify-center">
        <button className=" rounded-lg  px-8 py-3 bg-primaryColor  text-[14px] font-poppins font-[500] text-white">
          See more
        </button>
        </div>
      </section>
      <section className="p-4">
        <div className=" p-4 bg-[#D0D0D0] relative">

       
        <div className=" flex flex-col gap-3 ">
          <h1 className="text-[18px] font-poppins font-[600] text-primaryColor">Lorem ipsum dolor sit amet consectetur.</h1>
          <h2 className="text-[14px] font-poppins font-[400] text-primaryColor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aperiam minima adipisci, nihil tenetur iure voluptatibus cupiditate dolorum praesentium quaerat hic aspernatur optio aliquam facilis beatae?</h2>
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
      <section>

      </section>
      <section>
        <h1 className="p-5 font-poppins font-[600] text-[18px]">
          Browser by category
        </h1>

        <Slider {...settings2}>
         {broCategoryCard(img,'Casual Wera ','Over 20 categories in staccks')}
         {broCategoryCard(img,'Casual Wera ','Over 20 categories in staccks')}
        </Slider>
      </section>
      <section>
        <div className="bg-primaryColor text-white">
          <div className="flex p-7 gap-2 flex-col ">
          <div className="flex justify-between">  <h1>About</h1> <h1>^</h1></div>
          <div className="flex justify-between">  <h1>About</h1> <h1>^</h1></div>
          <div className="flex justify-between">  <h1>About</h1> <h1>^</h1></div>
          
          </div>
          <div className="w-full flex flex-col items-center justify-center">
          <hr  className="bg-white opacity-65 my-3 w-[80%] " />
           <h1 className="text-3xl"> ገና</h1>
           <div className="flex mt-5 mb-5 justify-center gap-3 w-[60%]">
<FaFacebook  className="text-xl"/>
<FaWhatsapp  className="text-xl"/>
<CgTwitter  className="text-xl"/> 
           </div>
          </div>
          <div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default App;
