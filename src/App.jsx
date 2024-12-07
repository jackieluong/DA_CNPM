import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login/Login";
import Product from './pages/Productpage/Product';
import Cart from "./pages/Cartpage/Cart";
import ProductDetails from "./pages/Detail/ProductDetails";
import AccountInfo from "./pages/Account/AccountInfo";
import AccountOrders from "./pages/Account/AccountOrders";
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="/account" element={<AccountInfo/>}/>
          <Route path="/account/orders" element={<AccountOrders/>}/>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:id" element={<ProductDetails />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
