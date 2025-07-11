import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import generateRoutes from "./routes/generate.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// Conexión a MongoDB
mongoose
  .connect()
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error al conectar MongoDB:", err));

app.get("/", (req, res) => {
  res.send("¡Servidor corriendo OK!");
});

app.use("/api", generateRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
