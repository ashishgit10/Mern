import Joi from "joi";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
const authControl = {
  async register(req, res, next) {
    // 1- validate user input
    const userRegisterSchema = Joi.object({
      username: Joi.string().min(5).max(30).required(),
      name: Joi.string().max(15).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(passwordPattern).required(),
      confirmPassword: Joi.ref("password"),
    });

    const { error } = userRegisterSchema.validate(req.body);
    // 2- if error in validation -> return error via **middleware**
    if (error) {
      return next(error);
    }
    // 3- if email or username is already register -> return error
    const { username, name, email, password } = req.body;
    // 4- password hash

    // 5- store user data in db

    // 6- response send
  },
  async login() {},
};
export default authControl;
