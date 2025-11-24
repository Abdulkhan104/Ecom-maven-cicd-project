package com.zosh.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zosh.domain.OrderStatus;
import com.zosh.domain.PaymentStatus;
import com.zosh.model.Address;
import com.zosh.model.Cart;
import com.zosh.model.CartItem;
import com.zosh.model.Order;
import com.zosh.model.OrderItem;
import com.zosh.model.User;
import com.zosh.repository.AddressRepository;
import com.zosh.repository.OrderItemRepository;
import com.zosh.repository.OrderRepository;
import com.zosh.service.OrderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final OrderItemRepository orderItemRepository;

    @Override
    public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) {
      if(!user.getAddresses().contains(shippingAddress)){
        user.getAddresses().add(shippingAddress);
      }
      Address address= addressRepository.save(shippingAddress);

      Map<Long, List<CartItem>> itemBySeller = cart.getCarItems().stream()
                    .collect(Collectors.groupingBy(item->item.getProduct()
                    .getSeller().getId()));
                    
    Set<Order> orders=new HashSet<>();

    for(Map.Entry<Long, List<CartItem>> entry:itemBySeller.entrySet()){
        Long sellerId = entry.getKey();
        List<CartItem> items=entry.getValue();

        int totalOrderPrice=items.stream().mapToInt(
            CartItem::getSellingPrice
        ).sum();

        int totalItem=items.stream().mapToInt(CartItem::getQuantity).sum();

        Order createdOrder = new Order();
        createdOrder.setUser(user);
        createdOrder.setSellerId(sellerId);
        createdOrder.setTotalMrpPrice(totalOrderPrice);
        // createdOrder.setTotalSellingPrice(totalOrderPrice);
        createdOrder.setTotalSellingPrice((long) totalOrderPrice);
        createdOrder.setTotalItem(totalItem);
        createdOrder.setShippingAddress(shippingAddress);
        createdOrder.setOrderstatus(OrderStatus.PENDING);
        createdOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);


        Order savedOrder = orderRepository.save(createdOrder);
        orders.add(savedOrder);

        List<OrderItem> orderItems= new ArrayList<>();

        for(CartItem item:items){
            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(savedOrder);
            orderItem.setMrpPrice(item.getMrpPrice());
            orderItem.setProduct(item.getProduct());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setUserId(item.getUserId());
            orderItem.setSellingPrice(item.getSellingPrice());

            savedOrder.getOrderItem().add(orderItem);

            OrderItem savedOrderItem=orderItemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }

    }
      return orders;
    }

    @Override
    public Order findOrderById(long id)throws Exception {
       return orderRepository.findById(id).orElseThrow(() ->
         new Exception("Oder Not Found.."));
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {
       return orderRepository.findByUserId(userId);
    }

    @Override
    public List<Order> sellersOrder(Long sellerId) {
      return orderRepository.findBySellerId(sellerId);
    }

    @Override
    public Order updateOrderStatus(Long orderId, OrderStatus orderStatus) throws Exception{
       Order order = findOrderById(orderId);
       order.setOrderstatus(orderStatus);
       return orderRepository.save(order);
    }

    @Override
    public Order cancelOrder(Long orderId, User user)throws Exception {
        Order order = findOrderById(orderId);

        if(!user.getId().equals(order.getUser().getId())){
            throw new Exception("You Dont't have Access to this order..");
        }

        order.setOrderstatus(OrderStatus.CANCELLED);
        return orderRepository.save(order);
    }

    @Override
    public OrderItem getOrderItemById(Long id)throws Exception {
        return orderItemRepository.findById(id).orElseThrow(()->
          new Exception("Oder item not exist..."));
    }

}
