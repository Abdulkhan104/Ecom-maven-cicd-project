package com.zosh.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.zosh.model.Order;
import com.zosh.model.Seller;
import com.zosh.model.Transaction;
import com.zosh.repository.SellerRepository;
import com.zosh.repository.TransactionRepository;
import com.zosh.service.TransactionService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService{

    private final TransactionRepository transactionRepository;
    private final SellerRepository sellerRepository;

    @Override
    public Transaction createTransaction(Order order) {
        
        Seller seller = sellerRepository.findById(order.getSellerId()).get();

        Transaction transaction = new Transaction();
        transaction.setSeller(seller);
        transaction.setOrder(order);

        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getTransactionBySellerId(Seller seller) {
        return transactionRepository.findBySellerId(seller.getId());
    }

    @Override
    public List<Transaction> getAllTransactions() {
       return transactionRepository.findAll();
    }

}
