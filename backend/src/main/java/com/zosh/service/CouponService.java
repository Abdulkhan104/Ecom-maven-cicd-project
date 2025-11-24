package com.zosh.service;

import java.util.List;

import com.zosh.model.Cart;
import com.zosh.model.Coupon;
import com.zosh.model.User;

public interface CouponService {


    Cart applyCoupon(String code,double orderValue, User user)throws Exception;
    Cart removeCoupon(String code,User user)throws Exception;
    Coupon findCouponById(Long id)throws Exception;
    Coupon createCoupon(Coupon coupon)throws Exception;
    List<Coupon> findAllCoupons()throws Exception;
    void deleteCoupon(Long id)throws Exception;



}
