import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "./customer/components/pages/Navbar/Navbar";
import customeTheme from "./Theme/customeTheme";
import Home from "./customer/components/pages/Home/Home";
import Product from "./customer/components/pages/Product/Product";
import ProductDetails from "./customer/components/pages/Page Details/ProductDetails";
import Review from "./customer/components/pages/Review/Review";
import Cart from "./customer/components/pages/Cart/Cart";
import Checkout from "./customer/components/pages/Checkout/Checkout";
import Account from "./customer/components/pages/Account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import BecomeSeller from "./customer/components/pages/Become Seller/BecomeSeller";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./admin/Pages/Dashboard/AdminDashboard";
import { fetchProduct } from "./State/fetchProduct";
import { useAppDispatch, useAppSellector } from "./State/Store";
import { fetchSellerProfile } from "./State/seller/sellerSlice";
import Auth from "./customer/components/pages/Auth/Auth";
import { fetchUserProfile } from "./State/AuthSlice";
import PaymentSuccess from "./customer/components/pages/PaymentSuccess";

function App() {
  const dispatch = useAppDispatch();
  const { seller , auth } = useAppSellector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, []);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  }, [seller.profile]);


  useEffect(()=>{
    if(seller.profile){
      navigate("/seller")
    }
  },[seller.profile])


  useEffect(()=>{
    dispatch(fetchUserProfile({ jwt: auth.jwt || localStorage.getItem("jwt")}))
  },[auth.jwt])

  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products/:category" element={<Product/>} />
          <Route
            path="/reviews/:productId/:name/:productId"
            element={<Review />}
          />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success/:orderId" element={<PaymentSuccess />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
