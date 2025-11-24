package com.zosh.service;

import java.util.List;

import com.zosh.domain.AccountStatus;
import com.zosh.exception.SellerAlreadyExistsException;
import com.zosh.exception.SellerException;
import com.zosh.exception.SellerNotFoundException;
import com.zosh.model.Seller;

public interface SellerService {

    Seller getSellerProfile(String jwt) throws SellerNotFoundException;
    Seller createSeller(Seller seller) throws SellerAlreadyExistsException;
    Seller getSellerById(Long id) throws SellerException;
    Seller getSellerByEmail(String email)throws SellerNotFoundException;
    List<Seller> getAllSellers(AccountStatus status);
    Seller updatSeller(Long id,Seller seller) throws SellerException;
    void deleteSeller(Long id) throws SellerException;
    Seller verifyEmail(String email,String otp) throws SellerNotFoundException;
    Seller updateSellerAccountStatus(Long sellerId, AccountStatus status) throws SellerException;
}
