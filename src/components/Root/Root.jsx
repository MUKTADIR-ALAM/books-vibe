import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


export default function Root() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
