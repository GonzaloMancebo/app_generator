import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register"); 
  };

    const handleHome = () => {
    navigate("/home"); 
  };

  return (
    <>
      <h1>Login</h1>
      <input placeholder="@usuario" />
      <button onClick={handleHome}>Ingresar</button>
      <button title="No tenes cuenta? Registrarte" onClick={handleRegister}>
        Registrarte
      </button>
    </>
  );
}

export default Login;
