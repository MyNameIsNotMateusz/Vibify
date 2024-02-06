import "../styles/AppLayout.css";
import { Header } from "../components/Header"; 
import { Dashboard } from "../components/Dashboard";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {

 /*Add a "slide" class to slide out the menu.*/
 const showMenu = () => {
  const menu = document.querySelector(".header");
  menu.classList.toggle("slide");
  menu.classList.toggle("slide-reverse");
}

 return (
  <div className="main-container">
   <Header />
   <div className="content">
      <Outlet />
   </div>
   <Dashboard />
  </div>
 )
}