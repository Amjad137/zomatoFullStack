import Express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = Express();

zomato.use(Express.json());
zomato.use(Express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());

zomato.get("/", (req, res) => {
  res.json({ message: "Node Server Started" });
});

zomato.listen(5500, () => console.log("Servers is Running"));
