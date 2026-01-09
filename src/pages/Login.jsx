import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFail } from "../redux/slices/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authServices";

export default function Login() {
  const [username, setU] = useState("");
  const [password, setP] = useState("");
  const { loading, error } = useSelector(s => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    dispatch(loginStart());
    try {
      const data = await login({ username, password });
      dispatch(loginSuccess(data));
      navigate("/home");
    } catch {
      dispatch(loginFail("Invalid credentials"));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input onChange={e => setU(e.target.value)} />
      <input type="password" onChange={e => setP(e.target.value)} />
      <button onClick={handleLogin}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
