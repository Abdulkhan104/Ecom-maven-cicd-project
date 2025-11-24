package com.zosh.service;

import java.util.List;
import java.util.Set;

import com.zosh.domain.OrderStatus;
import com.zosh.model.Address;
import com.zosh.model.Cart;
import com.zosh.model.Order;
import com.zosh.model.OrderItem;
import com.zosh.model.User;

public interface OrderService {
    Set<Order> createOrder(User user, Address shippingAddress,Cart cart);
    Order findOrderById(long id)throws Exception;
    List<Order> usersOrderHistory(Long userId);
    List<Order> sellersOrder(Long sellerId);
    Order updateOrderStatus(Long orderId, OrderStatus orderStatus)throws Exception;
    Order cancelOrder(Long orderId,User user)throws Exception;

    OrderItem getOrderItemById(Long id)throws Exception;
}
