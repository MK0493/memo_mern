import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouter from "./routes/posts.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const _dirname = path.join("");
const buildPath = path.join(_dirname, "../client/build");

dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//hosting the client on the nodejs environment
app.use(express.static(buildPath));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
    function (error) {
      if (error) {
        res.status(500).send(error);
      }
    }
  );
});

app.use("/posts", postRouter);

const CONNECTION_URL =
  "mongodb+srv://Khan:zjHzmuQ3QBslMK4b@cluster0.9qfvb.mongodb.net/?retryWrites=true&w=majority";
//zjHzmuQ3QBslMK4b
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
