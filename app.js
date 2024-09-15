import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from 'express-handlebars';
import express from "express";
import dotenv from 'dotenv'

import { router as indexRoute } from "./src/routes/index.js";

dotenv.config();
const app = express();
const host = process.env.APP_HOST || 'http://localhost'
const port = process.env.APP_PORT || '3000'
const __dirname = dirname(fileURLToPath(import.meta.url));

app.engine('handlebars', engine({
  defaultLayout: 'home',
  layoutsDir: join(__dirname, 'src', 'views')
}));
app.set("view engine", "handlebars");
app.set("views", join(__dirname, "src/views"));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(join(__dirname, "public")));

app.use(indexRoute);

app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});
