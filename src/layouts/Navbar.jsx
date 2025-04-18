import React, { useEffect, useState } from "react";
import { account } from "../config/appwrite-config";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk mengecek status login
  const navigate = useNavigate();

  // Fungsi untuk mengecek status login
  const checkLoginStatus = async () => {
    try {
      const user = await account.get();
      if (user) {
        setIsLoggedIn(true); // Jika pengguna sudah login
      } else {
        setIsLoggedIn(false); // Jika pengguna belum login
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
    }
  };

  // Fungsi untuk logout
  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // Hapus session pengguna
      setIsLoggedIn(false); // Set status login menjadi false
      navigate("/login"); // Redirect ke halaman login
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Cek status login saat komponen di-mount
  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div className="navbar bg-base-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div role="button" className="btn btn-outline lg:hidden">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg> */}
          </div>
          <ul  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="/">Home</a>
            </li>

            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="/products">Products</a>
            </li>

            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="/#about">About us</a>
            </li>
          </ul>
        </div>
        <img className=" md:flex hidden  w-10  h-10" src="/image/logo.png" alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="/">Home</a>
          </li>

          <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="/products">Products</a>
          </li>

          <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
            <a href="/#about">About us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn ? (
          // Tombol Logout jika pengguna sudah login
          <button onClick={handleLogout} className="px-3 border py-1.5 border-white  font-semibold  rounded hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
            Logout
          </button>
        ) : (
          // Tombol Login jika pengguna belum login
          <a href="/login" className="px-3 border py-1.5 border-white  font-semibold  rounded hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
