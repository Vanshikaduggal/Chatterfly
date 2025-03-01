import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";

const newUser = async (req, res) => {
  const {name,username,password,bio} = req.body;

  const avatar = {
    public_id: "abdas",
    url: "jsaj",
  };
  const user =await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res,user,201,"User created");
};

export { newUser };
