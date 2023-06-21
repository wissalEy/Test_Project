import { Router } from "express";
import UserController from "../controllers/UserController";
import { check } from "express-validator";

const userRoutes = (): Router => {
  const router = Router();

  router.route("/")
  .get(UserController.getAll)
  .post( [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
  ], UserController.addUser);

  router
    .route("/:id")
    .get(UserController.getUserById)
    .put(UserController.editUser)
    .delete(UserController.deleteUser);

  return router;
};
export default userRoutes;
