import React, { useState } from "react";
import{Link} from "react-router-dom";
export default function ForgotPasswordPage() {
    // State for email input
    const[email, setEmail] = useState("");
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/api/auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
            // If request fails → show error
            if (!res.ok) {
                alert("Request failed");
                return;
            }
            alert("Password reset link sent to your email");
        } catch (err) {
            // Handle server/network errors
            console.error(err);
            alert("Server error");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-green-600">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px]">
                <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>

        </div>
    );
}