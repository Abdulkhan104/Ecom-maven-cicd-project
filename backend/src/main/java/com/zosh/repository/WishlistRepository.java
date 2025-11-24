package com.zosh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zosh.model.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist,Long>{

    Wishlist findByUserId(Long userId);
}
