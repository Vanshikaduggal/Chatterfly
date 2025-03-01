import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const cookieOptions ={
  maxAge:15*60*60*1000,
  sameSite:"none",
  httpOnly:true,
  secure:true,
};

const connectDb = (uri) => {
  mongoose
    .connect(uri, { dbName: "Chatterfly" })
    .then((data) => console.log(`Connected to DB :${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);

  return res.status(code).cookie("chatterfly-token", token,cookieOptions).json({
    success: true,
    message,
  });
};

export { connectDb, sendToken };
