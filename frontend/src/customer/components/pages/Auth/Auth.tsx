import React, { useState } from "react";
import Registerform from "./Registerform";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://www.pngplay.com/wp-content/uploads/1/Login-PNG-Free-Commercial-Use-Image.png"
          alt=""
        />

        <div className="mt-8 px-10">
          {isLogin ? <LoginForm /> : <Registerform />}

          <div className="flex items-center gap-1 justify-center mt-5">
            <p>{isLogin && "Don't"} have Account</p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
