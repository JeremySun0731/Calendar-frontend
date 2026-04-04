import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName,
                    email,
                    password
                })
            });

            const data = await res.json(); // ⭐ 关键

            if (!res.ok) {
                alert(data.message || "Registration failed");
                return;
            }

            alert("Registration successful!");
            navigate("/login");

        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-green-600">
            
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px]">

                <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

                <form onSubmit={handleRegister} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />

                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md w-full"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    );
}