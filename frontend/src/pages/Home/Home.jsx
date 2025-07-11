import { useState } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/generate-app", {
        prompt,
      });

      setResponse(`✅ App generada: ${res.data.folder}`);
      setPrompt("");
    } catch (err) {
  console.error("Error desde frontend:", err.response?.data || err.message);
  setResponse("❌ Error generando la app");
}
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h2>Acá donde todo empieza</h2>
        <p>Agregá tu prompt para generar tu app soñada</p>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ej: app de recetas con login"
        />
        <button onClick={handleGenerate}>🚀 Generar App</button>

        {response && <p>{response}</p>}
      </div>
    </div>
  );
}

export default Home;
