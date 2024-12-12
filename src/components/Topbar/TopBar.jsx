import { FaBars } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import TopBarItem from "./TopBarItem";
import { useState } from "react";
function TopBar({ showSideBar, setShowSideBar }) {
  const [dropDown, setDropDown] = useState(false);
  function handleToggleSideBar() {
    setShowSideBar((showSideBar) => !showSideBar);
    console.log("render");
  }

  function handleLogOut() {
    localStorage.removeItem("token");
  }
  return (
    <div className="topbar">
      <div className="h-flex">
        {/* <button>
            <FaBars />
          </button> */}
        <div className="topbar-item ">
          <button
            className="topbar-button"
            onClick={handleToggleSideBar}
            title="Toggle Sidebar"
          >
            <div className="topbar-icon">
              <FaBars />
            </div>
          </button>
        </div>
      </div>
      <div className="h-flex me-5">
        <TopBarItem icon={<IoNotificationsOutline />} />
        <TopBarItem icon={<IoMoonOutline />} />
        <div className="position-relative">
          <div
            className="topbar-item bg-transparent p-0 d-flex align-items-center"
            onClick={() => setDropDown((prev) => !prev)}
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
          >
            <img
              className="rounded-3 h-100 object-fit-cover"
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="profile"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {dropDown && (
            <div
              className="p-3 position-absolute end-0 mt-3 bg-white shadow"
              style={{ minWidth: "150px" }}
            >
              <div
                className=" fw-bold"
                style={{ cursor: "pointer" }}
                onClick={handleLogOut}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
