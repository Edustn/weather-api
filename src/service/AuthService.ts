import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import { getRedisClient } from "../client/redisClient";

class AuthService {
  async login(username: string, password: string) {
    const expectedUsername = process.env.AUTH_USERNAME;
    const expectedPassword = process.env.AUTH_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;

    if (!expectedUsername || !expectedPassword) {
      throw new Error("AUTH_USERNAME/AUTH_PASSWORD not set");
    }

    if (!jwtSecret) {
      throw new Error("JWT_SECRET not set");
    }

    if (username !== expectedUsername || password !== expectedPassword) {
      return null;
    }

    const ttlSeconds = Number(process.env.JWT_TTL_SECONDS || 3600);
    if (!Number.isFinite(ttlSeconds) || ttlSeconds <= 0) {
      throw new Error("JWT_TTL_SECONDS must be a positive number");
    }

    const jti = randomUUID();
    const token = jwt.sign({ sub: username, jti }, jwtSecret, {
      expiresIn: ttlSeconds,
    });

    const redis = await getRedisClient();
    await redis.set(`auth:token:${token}`, username, { EX: ttlSeconds });

    return { token, expiresIn: ttlSeconds };
  }
}

export default AuthService;
