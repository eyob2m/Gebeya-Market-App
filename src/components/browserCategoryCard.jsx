const browserCategoryCard = ({ image, title, desc }) => {
  return (
    <div className="p-3 md:p-0 md:h-fit">
      <div className=" md:w-[100%]  rounded-md p-2">
        <div className="p-8 py-8 mb-4 bg-[#F2F2F2] relative rounded-lg">
          <div className="relative md:h-[250px] bg-[#F2F2F2]">
            <img
              className="rounded-lg  bg-[#F2F2F2] object-contain"
              src={image}
              alt={desc}
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-1">
          <div>
            <h1 className="text-[1rem] md:font-[600] md:text-[28px] font-poppins font-[600] text-[#000000]">
              {title}
            </h1>
          </div>
          <div className="flex justify-between items-start">
            <h2 className="text-[0.75rem] md:text-nowrap md:text-[20px] md:font-[400] text-center font-poppins font-[400] text-[#808080]">
              {desc}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default browserCategoryCard;
