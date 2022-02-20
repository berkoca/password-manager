import "reflect-metadata";
import express from "express";
import cors from "cors";
import { Database } from "./database";
import router from "./routes";

(async function() {
    await Database.connect();

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use("/", router);
    
    app.listen(process.env.PORT || 3000, () => console.log(`App listening on port: ${process.env.PORT || 3000}.`));
})();