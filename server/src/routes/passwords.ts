import { Router } from "express";
import { PasswordsController } from "../controllers/passwords";
import validator from "../middlewares/validator";
import { PasswordValidationSchema } from "../validations/Password";

const router = Router();
const controller = new PasswordsController();

router.route("/").get(controller.getPasswords);
router.route("/:id").get(controller.getPassword);
router.route("/").post(validator(PasswordValidationSchema.NewPassword), controller.newPassword);
router.route("/:id").put(validator(PasswordValidationSchema.EditPassword), controller.editPassword);
router.route("/:id").delete(controller.deletePassword);

export default router;