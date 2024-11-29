import { BiTransfer } from "react-icons/bi";
import img from "../assets/images/women_shoe.jpg";

import Footer from "../components/footer";
import Nav from "../components/nav";
import { CiCreditCard2 } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
const Checkout = () => {
  return (
    <div>
      <div className="max-md:hidden bg-slate-100">
        {/* navigation */}
        <Nav />
        <div className=" px-5">
          <div className="p-20">
            <section className="font-poppins">
              <div className="flex gap-8">
                <div className="flex flex-col gap-8">
                  <section className="w-full border-2  rounded-xl border-solid bg-white border-[#C1C1C1]">
                    <h1 className="font-[600] px-5 py-2 text-[1.25rem] text-[#1E1E1E]">
                      Shipping Address
                    </h1>

                    <hr className="my-4 bg-[#C1C1C1] h-[1px] w-full" />

                    <div className="p-6 flex gap-3 flex-col">
                      <div className="flex gap-3 flex-col">
                        <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                          Name
                        </h1>
                        <input
                          placeholder="First & Last name"
                          className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                          type="text"
                        />
                      </div>{" "}
                      <div className="flex gap-3 flex-col">
                        <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                          Address 1
                        </h1>
                        <input
                          placeholder="412, Dubai St"
                          className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                          type="text"
                        />
                      </div>{" "}
                      <div className="flex gap-3 flex-col">
                        <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                          Address 2
                        </h1>
                        <input
                          placeholder="23rd, Boulevard Ave"
                          className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                          type="text"
                        />
                      </div>
                      <div className="flex gap-2 w-full">
                        <div className="flex  gap-3 w-[50%] flex-col">
                          <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                            City
                          </h1>
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
                        <div className="flex  gap-3 w-[50%] flex-col">
                          <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                            Zip Code
                          </h1>
                          <input
                            placeholder="Zip Code"
                            className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1]"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="border-2  rounded-xl border-solid bg-white border-[#C1C1C1]">
                    {" "}
                    <hr className="my-4 bg-[#C1C1C1] h-[1px] w-full" />
                    <h1 className="font-[600] px-5 py-2 text-[1.25rem] text-[#1E1E1E]">
                      Payment method
                    </h1>
                    <hr className="my-4 bg-[#C1C1C1] h-[1px] w-full" />
                    <section className="px-7">
                      <div className="flex my-7 gap-2 text-[0.875rem]  justify-between text-[#808080]">
                        <div className="p-2 py-4 flex  bg-[#FEA301] flex-col justify-center items-center  text-white rounded-lg flex-1">
                          {" "}
                          <CiCreditCard2 /> <h2>Card</h2>
                        </div>
                        <div className="p-2 py-4 flex flex-col justify-center items-center border-2 border-solid border-[#C1C1C1] rounded-lg flex-1">
                          {" "}
                          <LuWallet /> <h2>Wallet</h2>
                        </div>
                        <div className="p-2 py-4 flex flex-col justify-center items-center border-2 border-solid border-[#C1C1C1] rounded-lg flex-1">
                          {" "}
                          <BiTransfer />{" "}
                          <h2 className="text-xs">Bank transfer</h2>
                        </div>
                      </div>
                      <div className="flex gap-3 flex-col">
                        <div className="flex gap-3 flex-col">
                          <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                            Name on card
                          </h1>
                          <input
                            placeholder="First & Last name"
                            className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                            type="text"
                          />
                        </div>{" "}
                        <div className="flex gap-3 flex-col">
                          <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                            Card number
                          </h1>
                          <input
                            placeholder="0000 0000 0000 0000"
                            className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                            type="text"
                          />
                        </div>{" "}
                        <div className="flex gap-2 py-8 w-full">
                          <div className="flex  gap-3 w-[50%] flex-col">
                            <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                              Expiry
                            </h1>
                            <input
                              placeholder="23rd, Boulevard Ave"
                              className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1]"
                              type="month"
                            />
                          </div>
                          <div className="flex  w-[50%] gap-3 flex-col">
                            <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                              Year
                            </h1>
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
                          <div className="flex  w-[50%] gap-3 flex-col">
                            <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                              CVV
                            </h1>
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
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="left h-fit border-2  rounded-xl border-solid bg-white border-[#C1C1C1]">
                  <center>
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
                        <h2 className="font-[500] text-nowrap text-[1.125rem] text-[#1E1E1E]">
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
                  <div className="px-8">
                    <button className=" my-5 rounded-md font-poppins  font-[400] text-[1rem] text-white py-3 bg-buttonColor w-full">
                      Place order
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
      <div className="md:hidden bg-slate-100">
        {/* navigation */}
        <Nav />
        <div className=" px-5">
          <div className="border-2  rounded-xl border-solid bg-white border-[#C1C1C1]">
            <section className="font-poppins">
              <div>
                <center>
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
                      <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                        Name
                      </h1>
                      <input
                        placeholder="First & Last name"
                        className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                        type="text"
                      />
                    </div>{" "}
                    <div className="flex gap-3 flex-col">
                      <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                        Address 1
                      </h1>
                      <input
                        placeholder="412, Dubai St"
                        className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                        type="text"
                      />
                    </div>{" "}
                    <div className="flex gap-3 flex-col">
                      <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                        Address 2
                      </h1>
                      <input
                        placeholder="23rd, Boulevard Ave"
                        className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                        type="text"
                      />
                    </div>
                    <div className="flex gap-2 w-full">
                      <div className="flex  gap-3 w-[50%] flex-col">
                        <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                          City
                        </h1>
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
                      <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                        Zip Code
                      </h1>
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
              <div className="flex my-7 gap-2 text-[0.875rem]  justify-between text-[#808080]">
                <div className="p-2 py-4 flex  bg-[#FEA301] flex-col justify-center items-center  text-white rounded-lg flex-1">
                  {" "}
                  <CiCreditCard2 /> <h2>Card</h2>
                </div>
                <div className="p-2 py-4 flex flex-col justify-center items-center border-2 border-solid border-[#C1C1C1] rounded-lg flex-1">
                  {" "}
                  <LuWallet /> <h2>Wallet</h2>
                </div>
                <div className="p-2 py-4 flex flex-col justify-center items-center border-2 border-solid border-[#C1C1C1] rounded-lg flex-1">
                  {" "}
                  <BiTransfer /> <h2 className="text-xs">Bank transfer</h2>
                </div>
              </div>
              <div className="flex gap-3 flex-col">
                <div className="flex gap-3 flex-col">
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                    Name on card
                  </h1>
                  <input
                    placeholder="First & Last name"
                    className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                    type="text"
                  />
                </div>{" "}
                <div className="flex gap-3 flex-col">
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                    Card number
                  </h1>
                  <input
                    placeholder="0000 0000 0000 0000"
                    className="border-2 rounded-lg p-3 border-solid border-[#C1C1C1]"
                    type="text"
                  />
                </div>{" "}
                <div className="flex gap-2 w-full">
                  <div className="flex  gap-3 w-[50%] flex-col">
                    <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                      Expiry
                    </h1>
                    <input
                      placeholder="23rd, Boulevard Ave"
                      className="border-2 rounded-lg p-3  border-solid border-[#C1C1C1]"
                      type="month"
                    />
                  </div>
                  <div className="flex  w-[50%] gap-3 flex-col">
                    <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                      Year
                    </h1>
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
                  <h1 className="font-[600] text-[0.875rem] text-[#1E1E1E]">
                    CVV
                  </h1>
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
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
