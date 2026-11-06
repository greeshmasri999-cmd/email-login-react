
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful!");
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h1>Welcome Back!</h1>
        <p>Login to your account</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default App;
