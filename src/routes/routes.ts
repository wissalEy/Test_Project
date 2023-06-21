import { Router } from "express";
import userRoutes from "./userRoutes";

const routes = () : Router => {
  const router = Router();
  router.use("/users", userRoutes());

  return router;
};
export default routes;
