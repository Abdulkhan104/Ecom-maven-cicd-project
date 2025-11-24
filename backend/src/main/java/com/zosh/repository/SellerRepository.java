package com.zosh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.zosh.model.Seller;
import java.util.List;
import com.zosh.domain.AccountStatus;


public interface SellerRepository extends JpaRepository<Seller,Long>{
     Seller findByEmail(String email);
     List<Seller> findByAccountStatus(AccountStatus status);
}
