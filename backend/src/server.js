import app from "./app.js";
import "dotenv/config";

app.listen(process.env.PORT || 5000, () =>
  console.log(`server is running on port ${process.env.PORT || 5000}`)
);
