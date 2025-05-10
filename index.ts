import express,{Express} from "express";
import dotenv from "dotenv";
import * as database from "./config/database"
import mainRoutes from "./routes/index.routes";
import cors from "cors"
dotenv.config();

// kết nối với database
database.connect()

const app:Express = express();


const port:string | number = process.env.PORT || 8080;


//kết nối với routes
mainRoutes(app);
//Cors
app.use(cors());
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });