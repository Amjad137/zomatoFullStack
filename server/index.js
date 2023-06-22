import Express from "express";
import cors from "cors";
import helmet from "helmet";
//API
import Auth from "./API/Auth";
require("dotenv").config(); //as we don't require this thing more often

const zomato = Express();

//DB
const dbConnection = require("./database/connection");
dbConnection();

//for Application Routes

zomato.use(Express.json());
zomato.use(Express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());

//for application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => {
  res.json({ message: "Node Server Started" });
});

zomato.listen(5500, () => console.log("Servers is Running"));
