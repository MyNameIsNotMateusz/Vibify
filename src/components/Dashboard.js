import "../styles/Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedical, faPause, faShuffle, faRepeat, faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons';

export const Dashboard = () => {
 return (
  <div className="dashboard">
   <div className="dashboard__notifications">
    <div className="dashboard__notifications-name">
     <p className="dashboard__notifications-text">Notifications</p>
     <p className="dashboard__notifications-link">See all</p>
    </div>
    <div className="dashboard__notifications-container">
     <div className="dashboard__notifications-item">
      <div>
       <div className="dashboard__notifications-image">
        <FontAwesomeIcon style={{ color: "#517bad" }} icon={faFileMedical} />
       </div>
       <div className="dashboard__notifications-text">
        <p className="dashboard__notifications-title">Playlist Added</p>
        <p className="dashboard__notifications-subtitle">130 Songs</p>
       </div>
      </div>
      <p className="dashboard__notifications-timestamp">3 Mins</p>
     </div>
     <div className="dashboard__notifications-item">
      <div>
       <div className="dashboard__notifications-image">
        <FontAwesomeIcon style={{ color: "#517bad" }} icon={faFileMedical} />
       </div>
       <div className="dashboard__notifications-text">
        <p className="dashboard__notifications-title">Playlist Added</p>
        <p className="dashboard__notifications-subtitle">130 Songs</p>
       </div>
      </div>
      <p className="dashboard__notifications-timestamp">3 Mins</p>
     </div>
    </div>
   </div>
   <div className="dashboard__topArtists">
    <div className="dashboard__topArtists-name">
     <p className="dashboard__topArtists-text">Top Artists</p>
     <p className="dashboard__topArtists-link">See all</p>
    </div>
    <div className="dashboard__topArtists-container">
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>

     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
     <div className="dashboard__topArtists-item">
      <div className="dashboard__topArtists-image"></div>
      <p className="dashboard__topArtists-artist">Travis Scott</p>
     </div>
    </div>
   </div>
   <div className="dashboard__playingNow">
    <div className="dashboard__playingNow-currentSong">
     <p className="dashboard__playingNow-name">Now Playing</p>
     <div className="dashboard__playingNow-image"></div>
     <p className="dashboard__playingNow-title">Look Into My eyes</p>
     <p className="dashboard__playingNow-author">John Meler</p>
     <div>
      <p>2:15</p>
      <input type="range" />
      <p>3:35</p>
     </div>
    </div>
    <div className="dashboard__playingNow-controls">
     <div>
     <FontAwesomeIcon style={{ color: "#ffffff", fontSize: "0.7em" }} icon={faRepeat} />
     </div>
     <div>
      <FontAwesomeIcon style={{ color: "#ffffff", fontSize: "0.7em" }} icon={faBackwardStep} />
     </div>
     <div className="dashboard__playingNow-stop">
      <FontAwesomeIcon style={{ color: "#ffffff", fontSize: "0.7em" }} icon={faPause} />
     </div>
     <div>
      <FontAwesomeIcon style={{ color: "#ffffff", fontSize: "0.7em" }} icon={faForwardStep} />
     </div>
     <div>
      <FontAwesomeIcon style={{ color: "#ffffff", fontSize: "0.7em" }} icon={faShuffle} />
     </div>
    </div>
   </div>
  </div>
 )
}