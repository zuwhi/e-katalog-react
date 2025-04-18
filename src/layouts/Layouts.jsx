import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="w-full flex justify-center bg-white scroll-smooth">
      <div className=" container max-w-screen-xl mx-auto px-4">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
