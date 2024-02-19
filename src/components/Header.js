import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faMap, faMagnifyingGlass, faVolumeHigh, faCompactDisc, faMicrophone, faClock, faHeart, faFolder, faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../app/routes";
import { useState } from "react";

export const Header = () => {

/*Check if a given link is active to add a class to the li tag.*/
const [isActive, setIsActive] = useState(false);

 return (
  <div className="header">
   <div className="header__brand">
    <div>
     <FontAwesomeIcon className="header__brand-icon" icon={faIcons} />
    </div>
    <p>Vibify</p>
   </div>
   <div className="header__menu">
    <p>Menu</p>
    <ul>
     <li className={isActive ? "menuLiActive" : ""}>
      <NavLink to={ROUTES.discoverRoute()}
       className={({ isActive, isPending }) => {
        if(isActive) {
         setIsActive(true)
         return "menuNavActive"
        } else if(isPending) {
         return ""
        } else {
         return "header__menu-navLink"
        }
       }}>
       <div>
        <FontAwesomeIcon icon={faMap} />
       </div>
       Discover
      </NavLink>
     </li>
     <li>
      <NavLink to=""
       className={({ isActive, isPending }) => isActive ? "" : isPending ? "" : "header__menu-navLink"}>
       <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
       </div>
       Search
      </NavLink>
     </li>
     <li>
      <NavLink to=""
       className={({ isActive, isPending }) => isActive ? "" : isPending ? "" : "header__menu-navLink"}>
       <div>
        <FontAwesomeIcon icon={faVolumeHigh} />
       </div>
       Genres
      </NavLink>
     </li>
     <li>
      <NavLink to=""
       className={({ isActive, isPending }) => isActive ? "" : isPending ? "" : "header__menu-navLink"}>
       <div>
        <FontAwesomeIcon icon={faCompactDisc} />
       </div>
       Albums
      </NavLink>
     </li>
     <li>
      <NavLink to=""
       className={({ isActive, isPending }) => isActive ? "" : isPending ? "" : "header__menu-navLink"}>
       <div>
        <FontAwesomeIcon icon={faMicrophone} />
       </div>
       Artist
      </NavLink>
     </li>
    </ul>
   </div>
   <div className="header__library">
    <p>Library</p>
    <ul>
     <li>
      <NavLink to="" className="header__library-navLink">
       <div>
        <FontAwesomeIcon icon={faClock} />
       </div>
       Recent
      </NavLink>
     </li>
     <li>
      <NavLink to="" className="header__library-navLink">
       <div>
        <FontAwesomeIcon icon={faHeart} />
       </div>
       Favourites
      </NavLink>
     </li>
     <li>
      <NavLink to="" className="header__library-navLink">
       <div>
        <FontAwesomeIcon icon={faFolder} />
       </div>
       Local
      </NavLink>
     </li>
    </ul>
   </div>
   <div className="header__playlist">
    <p>Playlist</p>
    <ul>
     <li>
      <NavLink to="" className="header__playlist-navLink">
       <div>
        <FontAwesomeIcon icon={faCirclePlus} />
       </div>
       Create New
      </NavLink>
     </li>
     <li>
      <NavLink to="" className="header__playlist-navLink">
       <div>
        <FontAwesomeIcon icon={faBars} />
       </div>
       Crazy Time
      </NavLink>
     </li>
     <li>
      <NavLink to="" className="header__playlist-navLink">
       <div>
        <FontAwesomeIcon icon={faBars} />
       </div>
       Pop Rocks
      </NavLink>
     </li>
    </ul>
   </div>
  </div>
 )
}