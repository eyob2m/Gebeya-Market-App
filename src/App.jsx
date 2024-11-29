import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import store from "./app/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

function App(){

  return <div>
    <Toaster/>
     <BrowserRouter>
   <Provider store={store}>

  <Routes>
 
  <Route  element={<Home />} path="/"/>
    <Route  element={<Cart />} path="/cart"/>
    <Route  element={<Checkout />} path="/checkout"/>
  
   
  </Routes>
  </Provider>,
  </BrowserRouter>
  </div>
}

export default App;
