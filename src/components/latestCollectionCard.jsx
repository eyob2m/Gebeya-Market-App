import { BiStar } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { RiHeartLine } from "react-icons/ri";

const latestCollectionCard = (
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
  return (
    <div className="p-3 ">
      <div className="border-solid w-[266px] border border-[#C1C1C1] rounded-md p-2">
        <div className="p-1  relative rounded-lg">
          <div className="relative bg-[#F2F2F2]">
            <img
              className="rounded-lg w- bg-[#F2F2F2] object-contain"
              src={image}
              alt={title}
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

export default latestCollectionCard;
