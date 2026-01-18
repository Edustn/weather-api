import { Request, Response } from "express";
import AuthService from "../service/AuthService";

class AuthController {
  private service = new AuthService();

  async login(req: Request, res: Response) {
    const { username, password } = req.body ?? {};

    if (!username || !password) {
      return res.status(400).json({ error: "username and password are required" });
    }

    try {
      const result = await this.service.login(String(username), String(password));
      if (!result) {
        return res.status(401).json({ error: "invalid credentials" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error("Login error", error);
      return res.status(500).json({ error: "internal server error" });
    }
  }
}

export default AuthController;
