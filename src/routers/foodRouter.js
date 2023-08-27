import {
  createLike,
  getLikeRes,
  getLikeUser,
  createRate,
  getRateRes,
  getRateUser,
  createOrder,
  getUserbyId,
  getFoodbyId,
  getResbyId,
  getSubbyId,
  gettypebyId,
} from "../controllers/foodControllers.js";
import express from "express";
const foodRouter = express.Router();

foodRouter.post("/create-like", createLike);
foodRouter.get("/get-like-res", getLikeRes);
foodRouter.get("/get-like-user", getLikeUser);
foodRouter.post("/create-rate", createRate);
foodRouter.get("/get-rate-res", getRateRes);
foodRouter.get("/get-rate-user", getRateUser);
foodRouter.post("/create-order", createOrder);
foodRouter.get("/get-userId", getUserbyId);
foodRouter.get("/get-foodId", getFoodbyId);
foodRouter.get("/get-resId", getResbyId);
foodRouter.get("/get-subId", getSubbyId);
foodRouter.get("/get-typeId", gettypebyId);

export default foodRouter;
