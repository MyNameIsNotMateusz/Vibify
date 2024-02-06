import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faMap, faMagnifyingGlass, faVolumeHigh, faCompactDisc, faMicrophone, faClock, faHeart, faFolder, faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export const Header = () => {
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
     <li>
      <NavLink className="header__menu-navLink">
       <div>
        <FontAwesomeIcon icon={faMap} />
       </div>
       Discover
      </NavLink>
     </li>
     <li>
      <NavLink className="header__menu-navLink">
       <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
       </div>
       Search
      </NavLink>
     </li>
     <li>
      <NavLink className="header__menu-navLink">
       <div>
        <FontAwesomeIcon icon={faVolumeHigh} />
       </div>
       Genres
      </NavLink>
     </li>
     <li>
      <NavLink className="header__menu-navLink">
       <div>
        <FontAwesomeIcon icon={faCompactDisc} />
       </div>
       Albums
      </NavLink>
     </li>
     <li>
      <NavLink className="header__menu-navLink">
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
      <NavLink className="header__library-navLink">
       <div>
        <FontAwesomeIcon icon={faClock} />
       </div>
       Recent
      </NavLink>
     </li>
     <li>
      <NavLink className="header__library-navLink">
       <div>
        <FontAwesomeIcon icon={faHeart} />
       </div>
       Favourites
      </NavLink>
     </li>
     <li>
      <NavLink className="header__library-navLink">
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
      <NavLink className="header__playlist-navLink">
       <div>
        <FontAwesomeIcon icon={faCirclePlus} />
       </div>
       Create New
      </NavLink>
     </li>
     <li>
      <NavLink className="header__playlist-navLink">
       <div>
        <FontAwesomeIcon icon={faBars} />
       </div>
       Crazy Time
      </NavLink>
     </li>
     <li>
      <NavLink className="header__playlist-navLink">
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