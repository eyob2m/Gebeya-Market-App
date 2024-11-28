
const categoryCard = ({ image, title, desc }) => {
  return (
          <div className="p-3 ">
            <div className="border-solid md:h-[200px] md:flex md:flex-col md:justify-center  border border-[#C1C1C1]  rounded-md p-2">
              <div className="p-10 py-4 md:p-3 md:flex md:h-[100%]  md:items-center md:justify-center   relative rounded-lg">
                <div className="relative md:h-[100%] md:p-4 md:rounded-xl bg-[#F2F2F2]">
                  <img
                    className="rounded-lg md:h-full md:w-full  object-contain"
                    src={image}
                    alt={desc}
                  />
                </div>
              </div>
    
              <div className="w-full flex flex-col items-center justify-center px-1">
                <div>
                  <h1 className="text-[1rem] font-poppins font-[600] text-[#000000]">
                    {title}
                  </h1>
                </div>
                <div className="flex justify-between items-start">
                  <h2 className="text-[0.75rem] text-center font-poppins font-[400] text-[#808080]">
                    {desc}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      };


export default categoryCard