import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <label htmlFor="fileInput"><i className="settingsPPIcon fa-solid fa-circle-user"></i></label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            
          </div>
          <label >Username</label>
            <input type="text" placeholder="Vivek" />
            <label >Email</label>
            <input type="email" placeholder="vivekbelwal144@gmail.com" />
            <label >Password</label>
            <input type="password"  />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
