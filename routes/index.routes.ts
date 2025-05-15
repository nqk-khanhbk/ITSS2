import { Express } from "express";
import { jobRoutes } from "./jobs.routes";
import { addressRoutes } from "./address.routes";
const mainRoutes = (app:Express):void=>{
  const version: string = "/api/v1";
  app.use(version + "/jobs", jobRoutes);
  app.use(version + "/address", addressRoutes);

}
export default mainRoutes;