package com.zosh.service.impl;

import org.springframework.stereotype.Service;

import com.zosh.model.CartItem;
import com.zosh.model.User;
import com.zosh.repository.CartitemRepository;
import com.zosh.service.CartItemService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService{
    
    private final CartitemRepository cartitemRepository;
    
    
    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem)throws Exception{
      CartItem item=findCartItemById(id);
      User cartItemUser= item.getCart().getUser();

      if(cartItemUser.getId().equals(userId)){
        item.setQuantity(cartItem.getQuantity());
        item.setMrpPrice(item.getQuantity()*item.getProduct().getMrpPrice());
        item.setSellingPrice(item.getQuantity()*item.getProduct().getSellingPrice());
        return cartitemRepository.save(item);

      }
      throw new Exception("You cant Update This CartItem");
    }

    @Override
    public void removeCartItem(long userId, Long cartItemId) throws Exception{
        CartItem item=findCartItemById(cartItemId);
        User cartItemUser= item.getCart().getUser();

        if(cartItemUser.getId().equals(userId)){
            cartitemRepository.delete(item);
        }
      throw new Exception("You cant Delete This CartItem");

    }

    @Override
    public CartItem findCartItemById(Long id) throws Exception{
      return cartitemRepository.findById(id).orElseThrow(()->
       new Exception("cart item not found with id :: "+id) );
    }

}
