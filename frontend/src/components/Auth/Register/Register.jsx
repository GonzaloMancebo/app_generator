import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <h1>Registrarse</h1>
      <input placeholder="Email" />
      <input placeholder="Contraseña" />
      <button title="Loguearse con Email Google"></button>
      <button>Registrarse</button>
      <button onClick={handleGoToLogin}>Volver al Login</button>
    </>
  );
}

export default Register;
