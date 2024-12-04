import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "./firebase/firebase";

export default function AuthPage() {
  const [currentView, setCurrentView] = useState("login"); // 'login', 'register', or 'forgotPassword'

  const handleSwitchToRegister = () => setCurrentView("register");
  const handleSwitchToLogin = () => setCurrentView("login");
  const handleForgotPassword = () => setCurrentView("forgotPassword");

  const navigate = useNavigate();

  // Login Form Component
  const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        setLoginSuccess(true);
        console.log("Logged in successfully");
        navigate("/catalyst");
      } catch (err) {
        setError("Login failed: " + err.message);
        setLoginSuccess(false);
      }
    };

    const googleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        console.log("Google Sign-In successful");
        navigate("/catalyst");
      } catch (err) {
        setError("Google Sign-In failed: " + err.message);
      }
    };

    return (
      <div className="login-card w-[350px]">
        <div className="login-card-header">
          <h2>Login</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="login-card-content">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <button type="button" className="google-btn" onClick={googleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google logo" />
          <span>Sign in with Google</span>
        </button>
        {loginSuccess && <p className="success-message" style={{ color: "green" }}>Login Successful!</p>}
        <div className="login-card-footer">
          <button className="btn-link" onClick={handleForgotPassword}>Forgot password?</button>
          <button className="btn-link" onClick={handleSwitchToRegister}>Don't have an account? Register</button>
        </div>
      </div>
    );
  };

  // Register Form Component
  const RegisterForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords don't match");
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        setRegistrationSuccess(true);
        console.log("Registered successfully");
        setTimeout(() => {
          setCurrentView("login");
        }, 2000);
      } catch (err) {
        setError("Registration failed: " + err.message);
        setRegistrationSuccess(false);
      }
    };

    return (
      <div className="login-card w-[350px]">
        <div className="login-card-header">
          <h2>Register</h2>
          <p>Create a new account</p>
        </div>
        <form onSubmit={handleSubmit} className="login-card-content">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {registrationSuccess && <p className="success-message" style={{ color: "green" }}>Registration Successful! Redirecting to Login...</p>}
          <button type="submit" className="btn-primary">Register</button>
        </form>
        <div className="login-card-footer">
          <button className="btn-link" onClick={handleSwitchToLogin}>Already have an account? Login</button>
        </div>
      </div>
    );
  };

  // Forgot Password Form Component
  const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent");
      } catch (err) {
        setError("Failed to send password reset email: " + err.message);
      }
    };

    return (
      <div className="login-card w-[350px]">
        <div className="login-card-header">
          <h2>Forgot Password</h2>
          <p>Enter your email to reset your password</p>
        </div>
        <form onSubmit={handleSubmit} className="login-card-content">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-primary">Reset Password</button>
        </form>
        <div className="login-card-footer">
          <button className="btn-link" onClick={handleSwitchToLogin}>Back to Login</button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {currentView === "login" && <LoginForm />}
      {currentView === "register" && <RegisterForm />}
      {currentView === "forgotPassword" && <ForgotPasswordForm />}
    </div>
  );
}


