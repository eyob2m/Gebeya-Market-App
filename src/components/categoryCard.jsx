
const categoryCard = ({ image, title, desc }) => {
  return (
          <div className="p-3 ">
            <div className="border-solid  border border-[#C1C1C1] rounded-md p-2">
              <div className="p-10 py-4  relative rounded-lg">
                <div className="relative bg-[#F2F2F2]">
                  <img
                    className="rounded-lg w- bg-[#F2F2F2] object-contain"
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