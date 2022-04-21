import "./topbar.css";
import { Search, Person } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Dinosocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timepage</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
          </div>
        </div>
      </div>
    </div>
  );
}
