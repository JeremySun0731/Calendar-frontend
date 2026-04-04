import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  // React Router navigation (used to redirect after successful login)
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  // Send login request to backend
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      // If request fails → show error
      if (!res.ok) {
        alert("Login failed");
        return;
      }

      const user = await res.json();

      console.log("Login success:", user);

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-green-600">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px]">

        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* ⭐ Forgot Password */}
          <div className="text-right text-sm">
            <Link
              to="/forgot-password"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 hover:underline"
            >
              Register
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}