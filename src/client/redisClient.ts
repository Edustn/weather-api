import { createClient, type RedisClientType } from "redis";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const client: RedisClientType = createClient({ url: redisUrl });
let isConnected = false;

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

export async function getRedisClient() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }

  return client;
}
