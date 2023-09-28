// require is an alternative of import
const express = require("express");
const cors = require("cors");
const userRouter = require("./controllers/userRouters");
const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// '/' slash is an localhost
app.get("/", userRouter);
// 3000 is a localhost server port
app.listen(8000, () => {
  console.log("server is running on port 8000");
});
// there is 2 server as 3000 , 8000
