/* eslint-disable react/prop-types */
import { BsStarFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import {  useDispatch } from 'react-redux';
import { increment } from '../app/cart';



const LatestCollectionCard = (
{  liked,
  image,
  stage,
  gfor,
  rating,
  title,
  sub,
  price,
  added}
) => {
    const dispatch = useDispatch();
  return (
    <div className="p-3 ">
      <div className="border-solid md:w-full md:h-full md:py-5 w-[266px] border border-[#C1C1C1] rounded-md p-2">
        
          <div className="relative p-1 md:h-[300px]  h-[136px] rounded-lg bg-[#F2F2F2]">
            <img
              className="rounded-lg w-full h-full bg-[#F2F2F2] object-contain"
              src={image}
              alt={title}
            />
            <div className="top-0 left-0 flex w-full px-5 py-2 justify-between absolute">
              <div className="flex justify-center items-center  bg-white p-1 rounded-full">
                {liked ? <FaHeart className="text-buttonColor" /> : <CiHeart />}
              </div>
              <h1 className="flex justify-center items-center text-[0.625rem] md:text-[12px] font-poppins font-[400]  bg-white px-1 rounded-full">
                {stage}
              </h1>
           
          </div>
        </div>
        <div className="flex justify-between py-2 px-1">
          <h2 className="border border-[#808080] text-[#808080] px-2 rounded-2xl md:text-[12px] font-poppins font-[400]">
            {gfor}
          </h2>
          <div className="flex items-baseline gap-1 md:text-[16px] text-[0.75rem] font-poppins text-[#808080] font-[400]">
           <BsStarFill className="text-yellow-300 " />
            <div>{rating}+ rating</div>
          </div>
        </div>
        <div className="mt-5 px-1">
          <h1 className="text-[1rem] md:text-[24px] font-poppins font-[600]">{title}</h1>
          <h1 className="text-[0.75rem] md:text-[18px] font-poppins font-[500] text-[#808080]">
            {sub}
          </h1>
          <div className="flex justify-between items-start">
            <h2 className="text-[1rem] md:text-[24px] font-poppins font-[600] self-end">
              {price}
            </h2>
            <button
            onClick={()=>dispatch(increment())}
              className={` rounded-lg  px-4 py-3 bg-buttonColor
               text-[0.875rem] font-poppins font-[500] text-white`}
            >
              {added ? "Add to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollectionCard;
