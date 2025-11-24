package com.zosh.service;

import com.zosh.model.CartItem;

public interface CartItemService {

    CartItem updateCartItem(Long userId,Long id, CartItem cartItem)throws Exception;
    void removeCartItem(long userId,Long cartItemId)throws Exception;
    CartItem findCartItemById(Long id)throws Exception;

}
