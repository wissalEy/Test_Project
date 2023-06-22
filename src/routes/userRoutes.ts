import { Router } from "express";
import UserController from "../controllers/UserController";
import { validateUser } from "../middlewares/userMiddleware";

const userRoutes = (): Router => {
  const router = Router();

  router.route("/")
  .get(UserController.getAll)
  .post(validateUser, UserController.addUser);

  router
    .route("/:id")
    .get(UserController.getUserById)
    .put(validateUser, UserController.editUser)
    .delete(UserController.deleteUser);

  return router;
};
export default userRoutes;
