import { BiTransfer } from "react-icons/bi";
import img from "../assets/4.jpg";
import { FaChevronDown, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
const Checkout = () => {
  const [about, setabout] = useState(false);
  
  const [products, setproducts] = useState(false);
  const [discover, setdiscover] = useState(false);

  return (
    <div className="bg-slate-100">
     <div className=" px-5">
     <div className="border-2  rounded-xl border-solid bg-white border-[#C1C1C1]">
     <section className="font-poppins">
        <div>
          <center>
            {" "}
            <h1 className="my-4 font-[600] text-[1.25rem] text-[#1E1E1E]">
              Order Summary
            </h1>
          </center>
          <hr className=" bg-[#C1C1C1] h-[1px] w-full" />
          <div className="flex flex-col gap-6 px-7 py-4">
            <div className="flex gap-4">
              <div className="w-[80px] bg-gray-200 rounded-lg  h-[80px]">
                <img
                  src={img}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-[500] text-[1.125rem] text-[#1E1E1E]">
                  Burberry Shine
                </h2>
                <h3 className="font-[500] text-[0.875rem] text-[#808080]">
                  FENDI
                </h3>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h4 className="font-[500] text-[0.875rem] text-[#808080]">
                  {" "}
                  Subtotal
                </h4>
                <h4 className="font-[500] text-[0.875rem] text-[#808080]">
                  Shipping
                </h4>
                <h4 className="font-[500] text-[0.875rem] text-[#808080]">
                  Tax
                </h4>
              </div>
              <div className="flex flex-col items-end gap-2">
                <h4 className="font-[500]  text-[0.875rem] text-[#1E1E1E]">
                  $150
                </h4>
                <h4 className="font-[500] text-[0.875rem] text-[#1E1E1E]">
                  $10
                </h4>
                <h4 className="font-[500] text-[0.875rem] text-[#1E1E1E]">
                  $5
                </h4>
              </div>
            </div>
          </div>
          <hr className="mb-4 bg-[#C1C1C1] h-[1px] w-full" />
          <center>
            <h1 className="font-[600] text-[1.25rem] text-[#1E1E1E]">
              Shipping Address
            </h1>
          </center>
          <hr className="my-4 bg-[#C1C1C1] h-[1px] w-full" />

          <section>
            <div className="p-6 flex gap-3 flex-col">
              <div className="flex gap-3 flex-col">
                <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Name</h1>
                <input
                  placeholder="First & Last name"
                  className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                  type="text"
                />
              </div>{" "}
              <div className="flex gap-3 flex-col">
                <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Address 1</h1>
                <input
                  placeholder="412, Dubai St"
                  className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                  type="text"
                />
              </div>{" "}
              <div className="flex gap-3 flex-col">
                <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Address 2</h1>
                <input
                  placeholder="23rd, Boulevard Ave"
                  className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                  type="text"
                />
              </div>
              <div className="flex gap-2 w-full">
                <div className="flex  gap-3 w-[50%] flex-col">
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">City</h1>
                  <input
                    placeholder="23rd, Boulevard Ave"
                    className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1]"
                    type="text"
                  />
                </div>
                <div className="flex  w-[50%] gap-3 flex-col">
                  <h1>State</h1>
                  <select
                    className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1] "
                    name="location"
                    id="location"
                  >
                    <option value="location">Location</option>
                    <option value="aa">Addis Ababa</option>
                    <option value="dd">Dire Dawa</option>
                  </select>
                </div>
              </div>
              <div className="flex  gap-3 w-[50%] flex-col">
                <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Zip Code</h1>
                <input
                  placeholder="Zip Code"
                  className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1]"
                  type="text"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <hr className="my-4 bg-[#C1C1C1] h-[1px] w-full" />
      <center>
        <h1 className="font-[600] text-[1.25rem] text-[#1E1E1E]">
          Payment method
        </h1>
      </center>
      <hr className="my-4 bg-[#C1C1C1] h-[1px] w-full" />
      <section className="px-7">
        <div className="flex my-7 gap-3 text-[0.875rem]  justify-between text-[#808080]">
          <div className="p-2 py-4 flex  bg-[#FEA301] flex-col justify-center items-center  text-white rounded-lg flex-1">
            {" "}
            <BiTransfer /> <h2>Card</h2>
          </div>
          <div className="p-2 py-4 flex flex-col justify-center items-center border-2 border-solid border-[#C1C1C1] rounded-lg flex-1">
            {" "}
            <BiTransfer /> <h2>Wallet</h2>
          </div>
          <div className="p-2 py-4 flex flex-col justify-center items-center border-2 border-solid border-[#C1C1C1] rounded-lg flex-1">
            {" "}
            <BiTransfer /> <h2>Bank transfer</h2>
          </div>
        </div>
        <div className="flex gap-3 flex-col">
              <div className="flex gap-3 flex-col">
                <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Name on card</h1>
                <input
                  placeholder="First & Last name"
                  className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                  type="text"
                />
              </div>{" "}
              <div className="flex gap-3 flex-col">
                <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Card number</h1>
                <input
                  placeholder="0000 0000 0000 0000"
                  className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                  type="text"
                />
              </div>{" "}
              
              <div className="flex gap-2 w-full">
                <div className="flex  gap-3 w-[50%] flex-col">
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Expiry</h1>
                  <input
                    placeholder="23rd, Boulevard Ave"
                    className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1]"
                    type="month"
                  />
                </div>
                <div className="flex  w-[50%] gap-3 flex-col">
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">Year</h1>
                  <select
                    className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1] "
                    name="year"
                    id="year"
                  >
                    <option value="year">YYYY</option>
                    <option value="2024">2024</option>
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                  </select>
                </div>
              </div>
              <div className="flex  w-[50%] gap-3 flex-col">
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">CVV</h1>
                  <select
                    className="border-2   rounded-lg p-3  border-solid border-[#C1C1C1] "
                    name="cvv"
                    id="cvv"
                  >
                    <option value="cvv">CVV</option>
                    <option value="2024">2024</option>
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                  </select>
                </div>
                <button className=" my-5 rounded-md font-poppins  font-[400] text-[1rem] text-white py-3 bg-buttonColor w-full">
            Place order
          </button>
            </div>
      </section>
     </div>
     </div>
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
};

export default Checkout;
