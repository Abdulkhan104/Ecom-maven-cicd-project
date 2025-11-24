package com.zosh.service;

import com.zosh.exception.UserNotFoundException;
import com.zosh.model.User;

public interface UserService {

    User findUserByJwtToken(String jwt) throws UserNotFoundException;
    User findUserByEmail(String email) throws UserNotFoundException;
}
