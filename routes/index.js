import express from "express";
const router = express.Router();
import authControl from "../controllers/authControl.js";

//testing
router.get("/test", (req, res) => {
  res.send("<h1>Hello Smarty</h1>");
});

//USER
//register
router.post("/login", authControl.register);
//login
router.post("/login", authControl.login);
//logout

//refresh

//BLOG

//CRUD

//create

//read all blogs

//readblog by id

//update

//delete

//COMMENT

//create comment

//read comment by blod ID

export default router;
