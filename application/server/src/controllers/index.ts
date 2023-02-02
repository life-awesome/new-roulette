import * as express from "express";
import jwtUtils from "../utils/jwt";

const { generateJwt, verifyJwt } = jwtUtils;

class AuthController {
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  private intializeRoutes() {}
}

export default AuthController;
