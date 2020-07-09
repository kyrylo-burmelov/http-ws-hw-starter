import loginRoutes from "./loginRoutes";
import gameRoutes from "./gameRoutes";

export default app => {
  app.use("/login", loginRoutes);
  app.use("/game", gameRoutes);
};
