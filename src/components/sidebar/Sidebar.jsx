import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatib
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="siderbarList">
          <li className="sidebarListItem"> Category</li>
          <li className="sidebarListItem"> Category</li>
          <li className="sidebarListItem"> Category</li>
          <li className="sidebarListItem"> Category</li>
          <li className="sidebarListItem"> Category</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
