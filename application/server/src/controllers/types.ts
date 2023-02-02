import * as express from "express";

export interface IController {
  rootPath: string;
  router: express.Router;
}

export type IControllersType = Array<IController>;
