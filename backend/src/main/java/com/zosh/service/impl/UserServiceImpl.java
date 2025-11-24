package com.zosh.service.impl;

import org.springframework.stereotype.Service;

import com.zosh.config.JwtProvider;
import com.zosh.exception.UserNotFoundException;
import com.zosh.model.User;
import com.zosh.repository.UserRepository;
import com.zosh.service.UserService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws UserNotFoundException {
       String email = jwtProvider.getEmailFromJwtToken(jwt);

      return this.findUserByEmail(email);
    }

    @Override
    public User findUserByEmail(String email) throws UserNotFoundException  {
        User user = userRepository.findByEmail(email);
        if(user == null){
            throw new UserNotFoundException ("User not found with email - :" +email);
        }
        
        return user;
    }

}
