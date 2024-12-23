import express, { Express, json } from "express";
import { router as deviceRouter } from "./router/devices.routes";
import { router as userRouter } from "./router/users.routes";

const app: Express = express();
app.use(json());

app.use("/device", deviceRouter);
app.use("/user", userRouter);

export { app };
