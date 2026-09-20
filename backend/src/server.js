import app from "./app.js";
import "dotenv/config";

app.get("/", (req, res) => {
  res.send(`server is running on port ${process.env.port }`);
});

app.listen(process.env.port || 5000 , () =>
  console.log(`server is running on port ${process.env.port }`)
);
