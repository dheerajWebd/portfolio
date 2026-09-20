import express from "express";
import cors from "cors";

const app = express();

app.use(cors(
  {
    origin:"http://localhost:5000",
    credentials: true,
    domain:"http://localhost:5000"

  }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
