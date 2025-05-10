import { Express } from "express";
import { jobRoutes } from "./jobs.routes";

const mainRoutes = (app:Express):void=>{
  const version: string = "/api/v1";
  app.use(version + "/jobs", jobRoutes);

}
export default mainRoutes;