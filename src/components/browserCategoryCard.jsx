const browserCategoryCard = ({ image, title, desc }) => {
  return (
    <div className="p-3">
      <div className="   rounded-md p-2">
        <div className="p-8 py-8 mb-4 bg-[#F2F2F2] relative rounded-lg">
          <div className="relative bg-[#F2F2F2]">
            <img
              className="rounded-lg  bg-[#F2F2F2] object-contain"
              src={image}
              alt={desc}
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

export default browserCategoryCard;
