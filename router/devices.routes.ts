import { Router } from "express";
import { recordReading, registerDevice } from "../controllers/device.controller";

const router = Router();

router.route("/").post(recordReading);
router.route("/register").post(registerDevice);

export { router };
