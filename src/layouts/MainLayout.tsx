import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/index.scss"

function MainLayout (){
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
export default MainLayout;