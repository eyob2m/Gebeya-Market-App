import img from "../assets/images/men_shoe.jpg";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import {
  FaChevronDown,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill } from "react-icons/bs";
import { GrDeliver, GrDocumentOutlook } from "react-icons/gr";
import { latestCollections } from "../data/latestCollections";
import latestCollectionCard from "../components/latestCollectionCard";
import { useState } from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

const Cart = () => {
  let settings = {
    speed: 300,
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  const [overview, setoverview] = useState(false);
  const [desc, setdesc] = useState(false);
  const [warranty, setwarranty] = useState(false);
  const [reviews, setreviews] = useState(false);

  const p = [img, img, img];
  let settings2 = {
    speed: 300,
    dots: true,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="font-poppins">
      {/* navigation */}
      <Nav />
      <div className=" px-5">
      <div className="border-2 pb-9 rounded-xl border-solid bg-white border-[#C1C1C1]">
      <section>
        <div>
          <div>
            <div>
              <Slider {...settings}>
                <div className="p-3">
                  <div className="   rounded-md p-2">
                    <div className="p-8 py-8 mb-4 bg-[#F2F2F2] relative rounded-lg">
                      <div className="relative bg-[#F2F2F2]">
                        <img
                          className="rounded-lg  bg-[#F2F2F2] object-contain"
                          src={img}
                          alt="mail photo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="   rounded-md p-2">
                    <div className="p-8 py-8 mb-4 bg-[#F2F2F2] relative rounded-lg">
                      <div className="relative bg-[#F2F2F2]">
                        <img
                          className="rounded-lg  bg-[#F2F2F2] object-contain"
                          src={img}
                          alt="hi"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="flex overflow-x-scrol p-8">
                {p.map((img) => {
                  return (
                    <div key={img} className="">
                      <div className="   rounded-md p-1">
                        <div className="p-3  bg-[#F2F2F2] relative rounded-lg">
                          <div className="relative bg-[#F2F2F2]">
                            <img
                              className="rounded-lg  bg-[#F2F2F2] object-contain"
                              src={img}
                              alt="hi"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full  flex flex-col items-center justify-center px-8">
                <div>
                  <h1 className="text-[1.5rem] font-poppins font-[600] text-[#000000]">
                  Burberry shine
                  </h1>
                </div>
                <div className="flex justify-between items-start">
                  <h2 className="text-[1rem] text-center font-poppins font-[400] flex gap-2  text-[#808080]">
               <h3 className="font-[400] text-[1rem]">Brand: </h3> Fendi</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8 bg-black h-[1px] w-full" />
      <section className="px-8">
        <div className="flex flex-col gap-1">
          <div className="flex w-[45%] justify-between items-center">
            <h1 className="text-[1.25rem]  text-[#222222] font-[500]">$150</h1>
            <h1 className="line-through font-[300] text-[1rem] text-[#808080]">
              $300
            </h1>
            <h1 className="bg-gray-100 rounded-md text-[#006200] font-[300] text-[0.875rem]">
              -50%
            </h1>
          </div>
          <div>
            <h2 className="text-[#006200B2] text-[0.875rem] font-[300]">
              50 units left
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-[300] text-[0.875rem] text-[#808080]">
              + shipping fee may vary on location
            </h1>
            <div className="flex items-baseline gap-1  text-[0.75rem] font-poppins text-[#808080] font-[400]">
              <BsStarFill className="text-yellow-300" />
              <div>1k+ rating</div>
            </div>{" "}
          </div>
        </div>
      </section>
      <hr className="my-8 bg-black h-[1px] w-full" />
      <section className="font-poppins">
        <div className="flex flex-col gap-4 p-8">
          <div className="flex w-[65%] items-center  gap-4">
            <h1 className="font-[400]  text-[0.875rem] text-[#1E1E1E]">
              Quantity:
            </h1>
            <div className="flex rounded-md border-solid items-center text-white  border w-full border-black">
              <button className="bg-[#FEA301]  flex-1">-</button>
              <h2 className="flex-1 text-black text-center">1</h2>
              <button className="bg-[#FEA301]  flex-1 ">+</button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex  items-center gap-3">
              <h1 className="font-[400] text-[0.875rem] text-[#1E1E1E]">
                Size:
              </h1>
              <div className="flex items-center gap-3 ">
                <h1 className="px-6 py-2 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[0.875rem] ]">
                  1
                </h1>
                <h1 className="px-6 py-2 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[0.875rem] ]">
                  2
                </h1>
                <h1 className="px-6 py-2 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[0.875rem] ]">
                  3
                </h1>
                <h1 className="px-6 py-2 border-solid  border-gray-400 border-2  rounded-lg text-[#222222 font-[500] text-[0.875rem] ]">
                  4
                </h1>
              </div>{" "}
            </div>
            <h3 className="self-end text-[#000000] text-[0.625rem] font-[500]">
              see all size guides
            </h3>
          </div>
          <div className="flex gap-3">
            <h1 className="font-[400] text-[0.875rem] text-[#1E1E1E]">
              Color:
            </h1>
            <div className="flex gap-2">
              <div className="border-2 border-solid rounded-md p-1 border-gray-500">
                <div className="w-[24px] h-[24px] rounded-md  bg-[#EBCDD5]"></div>
              </div>
              <div className="border-2 border-solid rounded-md p-1 border-gray-500 ">
                <div className="w-[24px] h-[24px] rounded-md  bg-[#4444FF]"></div>
              </div>
              <div className="border-2 border-solid rounded-md p-1 border-gray-500 ">
                <div className="w-[24px] h-[24px] rounded-md  bg-[#FF4646]"></div>
              </div>
              <div className="border-2 border-solid rounded-md p-1 border-gray-500 ">
                <div className="w-[24px] h-[24px] rounded-md  bg-[#242425]"></div>
              </div>
            </div>
          </div>
          <h1 className="font-[300] mb-3 self-center text-[0.875rem] text-[#006200]">
            Pickup & Pay on collection availabile
          </h1>
          <button className="border-2 border-solid rounded-md border-[#222222] p-2 ">
            <div className="flex gap-2 items-center justify-center">
              {" "}
              <BiCart size={30} />{" "}
              <span className="font-[500] text-[#222222] text-[1.5rem]">
                Save for later
              </span>
            </div>
          </button>
          <Link to={'/checkout'}>
          <button className="rounded-md font-poppins font-[400] text-[1rem] text-white py-2 bg-buttonColor w-full">
            Buy now
          </button>
          </Link>
         
          <div className="w-full mt-3 flex flex-col">
            <h2 className="font-[300] text[1.25rem] self-center">
              Share this product
            </h2>
            <div className="flex mt-5 justify-center gap-3 ">
              <FaInstagram className="text-xl" />
              <FaWhatsapp className="text-xl" />
              <FaXTwitter className="text-xl" />
            </div>
          </div>
        </div>
      </section>
      <hr className="mb-5 bg-black h-[1px] w-full" />
      <center>
        <h1 className="text-[1.25rem] font-[500] text-[#1E1E1E]">
          Delivery & Returns
        </h1>
      </center>
      <hr className="mb-3 mt-5 bg-black h-[1px] w-full" />
      <section className="p-8 pb-1 font-poppins  ">
        <h1 className="font-[500] text-[1.125rem] mb-4 text-[#1E1E1E]">
          Location
        </h1>
       <div className="flex flex-col gap-5">
       <div className="flex flex-col gap-6">
          <select
            className="p-2  rounded-lg  border border-solid border-gray-400 "
            name="location"
            id="location"
          >
            <option value="location">Location</option>
            <option value="aa">Addis ababa</option>
            <option value="dd">Dire dawa</option>
          </select>
          
        </div>
        
        <div className="flex flex-col gap-6">
          <select
            className="p-2  rounded-lg  border border-solid border-gray-400 "
            name="sub-location"
            id="sub-location"
          >
            <option value="sub-location">Sub-Location</option>
            <option value="bole">Bole</option>
            <option value="saris">Saris</option>
          </select>
          
        </div>
       </div>
        <div className="my-8 p-2 flex flex-col gap-5">
          <div className="flex place-items-baseline gap-6">
            <div>
              <GrDeliver />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[1rem] font-[500] text-[#1E1E1E]">Deliver</h1>
              <div className="flex flex-col gap-2">
                <p className="text-[0.75rem] font-[500] text-[#1E1E1E] ">
                Estimated delivery time is 1-12 business days 
                </p>
                <p className="text-[0.75rem] font-[500] text-[#1E1E1E] ">
                For Same-Day-Delivery: Please place your order before 12pm
                </p>
                <p className="text-[0.75rem] font-[500] text-[#1E1E1E] ">
                Next-Day-Delivery: Orders placed after 12pm will be delivered the next day.
                </p>
                <p className="text-[0.75rem] font-[500] text-[#1E1E1E] ">
                Note: Availability may vary by locations </p>
              </div>
            </div>
          </div>
          <div className="flex place-items-baseline gap-6">
            <div>
              <GrDocumentOutlook />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-[1rem] font-[500] text-[#1E1E1E]">
                Return Policy
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-[0.75rem] font-[500] text-[#1E1E1E] ">
                Guaranteed 7-day return policy
                </p>
                <p className="text-[0.75rem] font-[500] text-[#1E1E1E] ">
                For details about return shipping options, please visit our Contact page
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className=" bg-black h-[1px] w-full" />
      <div className="flex p-7 gap-4 flex-col ">
        <div
          onClick={() => setoverview((prv) => (prv = !prv))}
          className="flex justify-between"
        >
          <h1 className="font-poppins font-[460] text-[1rem]">Overview</h1>{" "}
          <FaChevronDown className={`${overview ? "" : "rotate-180"}`} />
        </div>
        <h1 className={` p-3 text-sm ${overview ? "block" : "hidden"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
          reiciendis exercitationem nulla!
        </h1>
        <div
          onClick={() => setdesc((prv) => (prv = !prv))}
          className=" flex justify-between"
        >
          <h1 className="font-poppins font-[460] text-[1rem]">Description</h1>{" "}
          <FaChevronDown className={`${desc ? "" : "rotate-180"}`} />
        </div>
        <h1 className={` p-3 text-sm ${desc ? "block" : "hidden"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
          reiciendis exercitationem nulla!
        </h1>

        <div
          onClick={() => setwarranty((prv) => (prv = !prv))}
          className="discover  flex justify-between"
        >
          <h1 className="font-poppins font-[460] text-[1rem]">Warranty</h1>{" "}
          <FaChevronDown className={`${warranty ? "" : "rotate-180"}`} />
        </div>
        <h1 className={` p-3 text-sm ${warranty ? "block" : "hidden"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
          reiciendis exercitationem nulla!
        </h1>
        <div
          onClick={() => setreviews((prv) => (prv = !prv))}
          className="discover  flex justify-between"
        >
          <h1 className="font-poppins font-[460] text-[1rem]">Reviews</h1>{" "}
          <FaChevronDown className={`${reviews ? "" : "rotate-180"}`} />
        </div>
        <h1 className={` p-3 text-sm ${reviews ? "block" : "hidden"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aliquam voluptatem, ea impedit necessitatibus cumque quidem ab
          reiciendis exercitationem nulla!
        </h1>
      </div>
      <hr className="mb-8 bg-black h-[1px] w-full" />
      <section id="latest-collections">
        <h1 className="p-5 font-poppins font-[600] text-[1.125rem] text-[#1E1E1E]">
          Similar items you may like
        </h1>

        <Slider {...settings2}>
          {latestCollections.map((col) => {
            return latestCollectionCard({ ...col });
          })}
        </Slider>
      </section> 
     </div> </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
