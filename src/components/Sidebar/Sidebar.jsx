import SidebarData from "./SidebarData.jsx";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar({showSideBar}) {

  return (
    // <div className="sidebar">
    <div className={`sidebar ${showSideBar ? '' : 'collapsed'}`}>
        
        <h3 className="sidebar-label mt-3 mb-4">Admin</h3>
      {SidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} showSideBar={showSideBar} />
      ))}
    </div>
  );
}

export default Sidebar;
