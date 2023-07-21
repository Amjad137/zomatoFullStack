require("dotenv").config(); //as we don't require this thing more often

import Express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//import googleAuthConfig
import googleAuthConfig from "./config/google.config";
import RouteConfig from "./config/route.config";
//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Images";
import Order from "./API/Orders";
import Review from "./API/Reviews";

//DB
const dbConnection = require("./database/connection");
dbConnection();

const zomato = Express();

var session = require("express-session");

zomato.use(Express.json());
zomato.use(Express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
zomato.use(passport.session());

//google Auth
googleAuthConfig(passport);
RouteConfig(passport);

//for application routes (micro services)
zomato.use("/auth", Auth);
zomato.use("/restaurants", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Review);

zomato.get("/", (req, res) => {
  res.json({ message: "Node Server Started" });
});

zomato.listen(5500, () => console.log("Servers is Running"));
