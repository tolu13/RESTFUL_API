import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    'mongodb+srv://olamideolanrewaju421:j0XbBqzEPgT2jLSy@cluster0.2d0zpai.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0'
)
.then(()=>app.listen(5000))
.then(() =>
    console.log("connected to database and listening on port 5000"))
.catch((err)=> console.log(err));

