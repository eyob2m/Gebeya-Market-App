import { BiCart, BiSearch, BiStar } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "./assets/4.jpg";
import { HiHeart } from "react-icons/hi";
import { RiHeartLine } from "react-icons/ri";
import Slider from "react-slick";
function App() {
 
  let settings = {
    speed: 300,
    dots: true,

    slidesToScroll: 1,
    variableWidth: true,
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
      <div className="p-3">
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
            <h1 className="text-[12px] font-poppins font-[500] text-[#808080]">{sub}</h1>
            <div className="flex justify-between items-start">
              <h2 className="text-[16px] font-poppins font-[600] self-end">
                {price}
              </h2>
              <button className={` rounded-lg  px-4 py-3 ${added ? "bg-gray-400" : "bg-buttonColor"}  text-[14px] font-poppins font-[500] text-white`}>
                {added ? "Remove from cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
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
        <h1 className="p-5 font-poppins font-[600] text-[18px]">Latest Colections</h1>

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
    </div>
  );
}

export default App;
