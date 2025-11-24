package com.zosh.service;

import java.util.List;

import com.zosh.model.Home;
import com.zosh.model.HomeCategory;

public interface HomeService {

    public Home createHomePageData(List<HomeCategory> allCategories);
}
