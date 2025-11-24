import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/Pages/Sellers/SellersTable'
import Coupon from '../admin/Pages/Coupon/Coupon'
import ShopByCategoryTable from '../admin/Pages/HomePage/ShopByCategoryTable'
import ElectronicTable from '../admin/Pages/HomePage/ElectronicTable'
import GridTable from '../admin/Pages/HomePage/GridTable'
import AddNewCouponFrom from '../admin/Pages/Coupon/AddNewCouponFrom'
import Deal from '../admin/Pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SellersTable/>} />
            <Route path="/coupon" element={<Coupon/>} />
            <Route path="/add-coupon" element={<AddNewCouponFrom/>} />
            <Route path="/home-grid" element={<GridTable/>} />
            <Route path="/electronics-category" element={<ElectronicTable/>} />
            <Route path="/shop-by-category" element={<ShopByCategoryTable/>} />
            <Route path="/deals" element={<Deal/>} />

        </Routes>
      
    </div>
  )
}

export default AdminRoutes
