package com.zosh.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.zosh.model.Home;
import com.zosh.model.HomeCategory;
import com.zosh.service.HomeCategoryService;
import com.zosh.service.HomeService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HomeCategoryController{

  private final HomeCategoryService homeCategoryService;
  private final HomeService homeService;

  @PostMapping("/home/categories")
  public ResponseEntity<Home> createHomeCategories(
    @RequestBody List<HomeCategory> homeCategories){

      List<HomeCategory> categories = homeCategoryService.createCategories(homeCategories);
        Home home=homeService.createHomePageData(categories);
        return new ResponseEntity<>(home,HttpStatus.ACCEPTED);
    }

  @GetMapping("/admin/home-category")
  public ResponseEntity<List<HomeCategory>> getHomeCategory(
  )throws Exception {
     
     List<HomeCategory> categories = homeCategoryService.getAllHomeCategories();
     return ResponseEntity.ok(categories);
  }

  @PostMapping("/admin/home-category/{id}")
  public ResponseEntity<HomeCategory> updateHomeCategory(
    @PathVariable Long id,
    @RequestBody HomeCategory homeCategory
  )throws Exception {
     
    HomeCategory updatedCategory = homeCategoryService.updateHomeCategory(homeCategory, id);
     return ResponseEntity.ok(updatedCategory);
  }

}
