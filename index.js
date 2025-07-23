import "dotenv/config";

import express from "express";
import authRoutes from "./src/routes/auth.router.js";
const app = express()

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos al proyecto final de Lucia Casserly" });
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor en puerto http://localhost:${PORT}`));

