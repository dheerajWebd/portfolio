import api from "./api.js";
import app from "./app.js";
import "dotenv/config";


app.get("/", async (req, res) => {
  const data = await api();
  res.json(data);
});

app.listen(process.env.port || 5000, () =>
  console.log(`server is running on port ${process.env.port}`)
);
