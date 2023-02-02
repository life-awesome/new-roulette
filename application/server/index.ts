import * as express from "express";
import * as bodyParser from "body-parser";
import { IControllersType } from "./src/controllers/types";
import connectMongo from "./src/utils/connect-mongo";
import cors from "./src/utils/cors";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IControllersType, port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("\x1b[32m", `App listening on the port ${this.port}`);
    });
    connectMongo();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(
      cors({
        credentials: true,
        origin: "http://localhost:3000",
      })
    );
  }

  private initializeControllers(controllers: IControllersType) {
    controllers.forEach((controller) => {
      this.app.use("/api", controller.router);
    });
  }
}

export default App;
