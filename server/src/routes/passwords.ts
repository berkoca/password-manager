import { Router } from "express";
import { PasswordsController } from "../controllers/passwords";

const router = Router();
const controller = new PasswordsController();

router.route("/").get(controller.getPasswords);
router.route("/:id").get(controller.getPassword);
router.route("/").post(controller.newPassword);
router.route("/:id").put(controller.editPassword);
router.route("/:id").delete(controller.deletePassword);

export default router;