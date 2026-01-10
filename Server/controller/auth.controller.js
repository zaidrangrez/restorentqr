import bcrypt from "bcrypt";
import User from "../models/User.js";
import { genarateAccessToken,genarateRefreshToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  try {
    const { email, name, password, phone } = req.body;
    

    const userData = await User.findOne({ email });

    if (userData) {
      return res.status(400).json({
        message: "You are already registered, please login",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      name,
      phone,
      passwordHash,
    });

    res.status(201).json({
      message: "Registered successfully",
      data: newUser,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const Login = async (req,res) =>{
    try {
        const {email,password} = req.body
    
        const user = await User.findOne({email});
        console.log(user)

        if (!user){
            res.status(400).json({
                message : `there is no account with ${email}, please create account an account and try again`
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.passwordHash)
        // console.log(isPasswordMatch)
        const accessToken = genarateAccessToken({name:user.name,email:user.email,role:user.role})
        const refreshToken = genarateRefreshToken({name:user.name,email:user.email,role:user.role})
        res.status(200).json({
          data:user,
          refreshToken,
          accessToken,
        })
    } catch (error) {
      res.status(500).json({
      message: error.message,
    });
    }
}