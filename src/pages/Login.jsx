import React, { useState } from "react";
import { account } from "../config/appwrite-config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;

    // Validasi email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validasi password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Hentikan proses login jika validasi gagal
    }

    setIsLoading(true); // Mulai loading

    try {
      await account.createEmailPasswordSession(email, password);
      setShowModal("berhasil login");
      window.location.href = "/dashboard";
    } catch (error) {
      setShowModal("gagal login pesan error : " + error.message); // Tampilkan modal error
    } finally {
      setIsLoading(false); // Berhenti loading
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-black text-sm font-medium mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Enter your email" />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-black text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition duration-200 flex items-center justify-center"
            disabled={isLoading} // Nonaktifkan tombol saat loading
          >
            {isLoading ? (
              <span className="loading loading-spinner text-accent"></span> // Loading spinner
            ) : (
              "Login"
            )}
          </button>
        </form>

  
        {/* <p className="mt-4 text-center text-gray-600 text-sm">Don't have an account? </p> */}
      </div>

      {/* Modal */}
      {showModal && (
        <dialog open className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* Tombol untuk menutup modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">{showModal.includes("berhasil") ? "Success" : "Error"}</h3>
            <p className="py-4">{showModal}</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Login;
