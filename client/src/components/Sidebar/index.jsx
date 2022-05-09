import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPlayList } from "../../redux/playListSlice/apiCalls";
import { CircularProgress } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import logo from "../../images/tune.svg";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExploreIcon from '@mui/icons-material/Explore';
import styles from "./styles.module.scss";

const Sidebar = () => {
  const { playlists, getPlayListProgress, createPlayListProgress } =
    useSelector((state) => state.playlists);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCreatePlayList = () => {
    const data = {
      name: "New Playlist #" + (playlists.length + 1),
      user: user._id,
      desc: "By " + user.name,
      songs: [],
      img: "",
    };
    createPlayList(data, dispatch);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo_img} src={logo} alt="logo" />
      <NavLink
        to="/home"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <HomeIcon />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/search"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <SearchIcon />
        <span>Search</span>
      </NavLink>
      <NavLink
        to="/Explore"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <ExploreIcon />
        <span>Explore</span>
      </NavLink>
      <NavLink
        to="/collection/playlists"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <LibraryMusicIcon />
        <span>Your Library</span>
      </NavLink>
      <NavLink
        to="/collection/tracks"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <FavoriteIcon />
        <span>Liked Songs</span>
      </NavLink>
     
     <div className={styles.playlistHead}><span>PLAYLIST</span></div>
      {getPlayListProgress || createPlayListProgress ? (
        <div className={styles.progress_container}>
          <CircularProgress style={{ color: "#00CEC9" }} size="3rem" />
        </div>
      ) : (
        <div className={styles.playlistContainer}>
          {playlists.map((playlist) => (
            <li>
              <NavLink
              key={playlist._id}
              to={`/playlist/${playlist._id}`}
              activeClassName={styles.active_link}
              className={styles.playlist_link}
            >
              {playlist.name}
            </NavLink>
            </li>
            
          ))}
        </div>
      )}
       <div
        className={styles.create_playlist_btn}
        onClick={handleCreatePlayList}
      >
        <AddIcon />
        <span>New Playlist</span>
      </div>
    </div>
  );
};

export default Sidebar;
