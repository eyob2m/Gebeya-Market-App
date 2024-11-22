import { BiCart, BiSearch, BiStar } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import img from "./assets/4.jpg";
import { HiHeart } from "react-icons/hi";
function App() {
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
      
    </div>
  );
}

export default App;
