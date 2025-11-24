package com.zosh.controller;

import com.zosh.repository.UserRepository;
import com.zosh.request.LoginOtpRequest;
import com.zosh.request.LoginRequest;
import com.zosh.response.SignupRequest;
import com.zosh.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zosh.domain.USER_ROLE;
import com.zosh.response.ApiResponse;
import com.zosh.response.AuthResponse;



@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {


    private final UserRepository userRepository;
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignupRequest req) throws Exception{

       String jwt = authService.createUser(req);

       AuthResponse res = new AuthResponse();
       res.setJwt(jwt);
       res.setMessage("Register Sussessfully...");
       res.setRole(USER_ROLE.ROLE_CUSTOMER);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/sent/login-signup-otp")
    public ResponseEntity<ApiResponse> sentOtpHandler(
        @RequestBody LoginOtpRequest req) throws Exception{

        authService.sentLoginOtp(req.getEmail(),req.getRole());;

       ApiResponse res = new ApiResponse();
       res.setMessage("sent OTP Sussessfully...");

        return ResponseEntity.ok(res);
    }

    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> loginHandler(
        @RequestBody LoginRequest req) throws Exception{

      AuthResponse authResponse =  authService.signing(req);
       
        return ResponseEntity.ok(authResponse);
    }
}
                              