import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
const app = express();
import { checkAuth } from "./middlewares/auth";
import { config } from "./config";
import { initFirebase } from "./firebase";

app.use(express.json());
initFirebase();

app.get(
  "/",
  checkAuth,
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.json({
      message: "Authorized",
    });
  }
);
app.listen(config.PORT, () => {
  console.log(`escuchando en el ${config.PORT}`);
});
