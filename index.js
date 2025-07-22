import "dotenv/config";
import express from "express";
const app = express()

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos al proyecto final" });
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

