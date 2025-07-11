import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/generate-app", async (req, res) => {
  const { prompt } = req.body;

  try {
    // Simulamos llamada a IA, que devuelve código en string
    const generatedCode = `// Código generado para prompt: ${prompt}\nconsole.log('Hola desde la app generada!');`;

    const folderName = `app_${Date.now()}`;
    const appsDir = path.join(process.cwd(), "..", "apps_generadas");
    const folderPath = path.join(appsDir, folderName);

    fs.mkdirSync(folderPath, { recursive: true });

    // Guardamos un archivo index.js con el código generado
    fs.writeFileSync(path.join(folderPath, "index.js"), generatedCode);

    res.json({ message: "App generada con éxito", folder: folderName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generando la app" });
  }
});

export default router;
