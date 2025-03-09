import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./layouts/Layouts";
import Product from "./pages/Product";
import Login from "./pages/Login";
import ProtectedRoute from "./config/protected";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
