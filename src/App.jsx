import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App(){

  return <BrowserRouter>
  <Routes>
    <Route  element={<Home />} path="/"/>
    <Route  element={<Cart />} path="/cart"/>
    <Route  element={<Checkout />} path="/checkout"/>
  </Routes>
  </BrowserRouter>
}

export default App;
