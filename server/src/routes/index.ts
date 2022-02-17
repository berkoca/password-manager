import { Router } from "express";
import passwordsRouter from "./passwords";

const router = Router();

router.use("/passwords", passwordsRouter);

export default router;