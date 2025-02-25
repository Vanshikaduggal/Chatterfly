import express from "express";
import userRoute from "./routes/user.js";

const app = express();

app.use(express.json()); // Middleware to parse JSON requests
app.use('/user', userRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
