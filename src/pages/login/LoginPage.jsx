import { useState } from "react"; // React hook: manage state (状态)
import { useNavigate, Link } from "react-router-dom"; // navigation + link

export default function LoginPage() {

  const navigate = useNavigate(); // used to redirect to another page (跳转页面)

  // state for form inputs
  const [email, setEmail] = useState(""); // store email input
  const [password, setPassword] = useState(""); // store password input

  // function triggered when form is submitted
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page refresh (阻止默认刷新)

    try {

      // send POST request to backend login API
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json" // tell backend we send JSON
        },
        body: JSON.stringify({
          email: email, // send email
          password: password // send password
        })
      });

      // if login failed (status not 200)
      if (!res.ok) {
        alert("Login failed"); // show error
        return;
      }

      // parse response JSON
      const user = await res.json();

      // print user info in console
      console.log("Login success:", user);

      // TODO: save token here (important in real apps)
      // localStorage.setItem("token", user.token);

      // redirect to home page after login
      navigate("/");

    } catch (err) {
      console.error(err); // print error
      alert("Server error"); // server down or network issue
    }
  };

  return (
    // full screen background
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-green-600">

      {/* login card */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px]">

        {/* title */}
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Login
        </h2>

        {/* form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email input */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email} // bind state
              onChange={(e) => setEmail(e.target.value)} // update state
              required
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password input */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password} // bind state
              onChange={(e) => setPassword(e.target.value)} // update state
              required
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* forgot password link */}
          <div className="text-right text-sm">
            <Link
              to="/forgot-password" // route to forgot password page
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* submit button */}
          <button
            type="submit" // triggers form submit
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>

          {/* register link */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/register" // go to register page
              className="text-green-600 hover:underline"
            >
              Register
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}0