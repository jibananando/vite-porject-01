import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";


export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}