import React, { useEffect, useState } from "react";
import { account } from "./appwrite-config";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Cek session pengguna
        const user = await account.get();
        if (user) {
          setIsAuthenticated(true);
        } else {
          navigate("/login"); // Redirect ke halaman login jika tidak terautentikasi
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        navigate("/login"); // Redirect ke halaman login jika terjadi error
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Tampilkan loading spinner atau pesan
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
