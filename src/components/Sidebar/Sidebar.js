// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './Sidebar.css';

// const Sidebar = ({ isOpen, closeSidebar }) => {
//   const sidebarStyle = {
//     backgroundColor: '#343a40',
//     color: '#ffffff',
//     height: '100vh',
//     padding: '20px',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '250px',
//     transition: 'all 0.3s ease-in-out',
//     zIndex: 1000,
//     transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
//   };

//   const navLinkStyle = {
//     color: '#ffffff',
//     padding: '10px',
//     display: 'block',
//     textDecoration: 'none'
//   };

//   const navLinkHoverStyle = {
//     backgroundColor: '#495057',
//     borderRadius: '4px'
//   };

//   const iconStyle = {
//     marginRight: '10px'
//   };
//   return (
//     // <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
//     //   <div className="sidebar-toggle" onClick={closeSidebar}>
//     //     {/* <i className="bi bi-x"></i> */}
//     //   </div>
//     //   <ul className="sidebar-nav" id="sidebar-nav">
//     //   <li className="nav-item">
      
//     //     {/* <a className="nav-link " > */}
//     //     <Link to = {"/AdminDash"}>
//     //     <a className="nav-link collapsed">
//     //       <i className="bi bi-grid" />
//     //       <span>Dashboard</span>
//     //       </a>
//     //       </Link>
//     //     {/* </a> */}
       
        
//     //   </li>
    
//     //   <li className="nav-item">
//     //   <Link to ="/AllUsers" >
//     //     <a className="nav-link collapsed">
//     //     <i className="bi bi-people" />
//     //       <span>Users</span>
//     //       {/* <i className="bi bi-chevron-down ms-auto" /> */}
          
//     //     </a>
//     //     </Link>
//     //   </li>
      
//     //   <li className="nav-item">
//     //   <Link to ="/AssignMachine" >
//     //     <a className="nav-link collapsed">
         
//     //       <i className="bi bi-layout-text-window-reverse" />
            
//     //         <span>Assign Machines</span>
//     //       {/* <i className="bi bi-chevron-down ms-auto" /> */}
          
//     //     </a>
//     //     </Link>
//     //   </li>
//     //   <li className="nav-heading">Pages</li>
//     //   <li className="nav-item">
//     //   <Link to ="/AdminProfile" >
//     //     <a className="nav-link collapsed">
//     //       <i className="bi bi-person" />
          
//     //       <span>Profile</span>
//     //     </a>
//     //     </Link> 
//     //   </li>
    
//     //   <li className="nav-item">
//     //     <a className="nav-link collapsed" >
//     //       <i className="bi bi-envelope" />
//     //       <span>Contact</span>
//     //     </a>
//     //   </li>
    
//     //   <li className="nav-item">
//     //     <Link to="/PostForm">
//     //     <a className="nav-link collapsed" >
//     //       <i className="bi bi-card-list" />
//     //       <span>Machine Type</span>
//     //     </a>
//     //     </Link>
//     //   </li>
      
//     //   <li className="nav-item">
//     //     <Link to = {'/'}>
//     //     <a className="nav-link collapsed" href="pages-login.html">
//     //       <i className="bi bi-box-arrow-in-right" />
//     //       <span>Logout</span>
//     //     </a>
//     //     </Link>
//     //   </li>
     
//     // </ul>
     
//     // </aside>
//     <aside className="sidebar" style={sidebarStyle}>
//       <div className="sidebar-toggle" onClick={closeSidebar}>
//         {/* <i className="bi bi-x"></i> */}
//       </div>
//       <ul className="sidebar-nav" id="sidebar-nav">
//         <li className="nav-item">
//           <Link to="/AdminDash">
//             <a
//               className="nav-link collapsed"
//               style={navLinkStyle}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//             >
//               <i className="bi bi-grid" style={iconStyle} />
//               <span>Dashboard</span>
//             </a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/AllUsers">
//             <a
//               className="nav-link collapsed"
//               style={navLinkStyle}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//             >
//               <i className="bi bi-people" style={iconStyle} />
//               <span>Users</span>
//             </a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/AssignMachine">
//             <a
//               className="nav-link collapsed"
//               style={navLinkStyle}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//             >
//               <i className="bi bi-layout-text-window-reverse" style={iconStyle} />
//               <span>Assign Machines</span>
//             </a>
//           </Link>
//         </li>
//         <li className="nav-heading">Pages</li>
//         <li className="nav-item">
//           <Link to="/AdminProfile">
//             <a
//               className="nav-link collapsed"
//               style={navLinkStyle}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//             >
//               <i className="bi bi-person" style={iconStyle} />
//               <span>Profile</span>
//             </a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <a
//             className="nav-link collapsed"
//             style={navLinkStyle}
//             onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//             onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//           >
//             <i className="bi bi-envelope" style={iconStyle} />
//             <span>Contact</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <Link to="/PostForm">
//             <a
//               className="nav-link collapsed"
//               style={navLinkStyle}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//             >
//               <i className="bi bi-card-list" style={iconStyle} />
//               <span>Machine Type</span>
//             </a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/">
//             <a
//               className="nav-link collapsed"
//               style={navLinkStyle}
//               onMouseEnter={e => e.currentTarget.style.backgroundColor = navLinkHoverStyle.backgroundColor}
//               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
//             >
//               <i className="bi bi-box-arrow-in-right" style={iconStyle} />
//               <span>Logout</span>
//             </a>
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const sidebarStyle = {
    backgroundColor: '#343a40',
    color: '#ffffff',
    height: '100vh',
    padding: '20px',
    position: 'fixed',
    top: '70px',  // Added space from the top
    left: '0px', // Added space from the left
    width: '250px',
    transition: 'all 0.3s ease-in-out',
    zIndex: 1000,
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
  };

  const navLinkStyle = (isActive, isHovered) => ({
    color: '#ffffff',
    padding: '10px',
    display: 'block',
    textDecoration: 'none',
    backgroundColor: isActive ? '#495057' : isHovered ? '#6c757d' : 'transparent', // Change background color on hover
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  });

  const iconStyle = {
    marginRight: '10px'
  };

  return (
    <aside className="sidebar" style={sidebarStyle}>
      <div className="sidebar-toggle" onClick={closeSidebar}>
        {/* <i className="bi bi-x"></i> */}
      </div>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/AdminDash">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'dashboard', hoveredItem === 'dashboard')}
              onClick={() => setActiveItem('dashboard')}
              onMouseEnter={() => setHoveredItem('dashboard')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-grid" style={iconStyle} />
              <span>Home</span>
            </a>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/index-saved-papers">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'users', hoveredItem === 'users')}
              onClick={() => setActiveItem('users')}
              onMouseEnter={() => setHoveredItem('users')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-people" style={iconStyle} />
              <span>My Papers</span>
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/index-educator-classroom">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'educator', hoveredItem === 'educator')}
              onClick={() => setActiveItem('educator')}
              onMouseEnter={() => setHoveredItem('educator')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-people" style={iconStyle} />
              <span>Class Rooms</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/index-templates">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'assignMachines', hoveredItem === 'assignMachines')}
              onClick={() => setActiveItem('assignMachines')}
              onMouseEnter={() => setHoveredItem('assignMachines')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-layout-text-window-reverse" style={iconStyle} />
              <span>Templates</span>
            </a>
          </Link>
        </li>
        {/* <li className="nav-heading" style={{ padding: '10px', fontSize: '16px', fontWeight: 'bold' }}></li> */}
                <li className="nav-item">
          <Link to="/index-new-assign">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'assign', hoveredItem === 'assign')}
              onClick={() => setActiveItem('assign')}
              onMouseEnter={() => setHoveredItem('assign')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-card-list" style={iconStyle} />
              <span>Assign Papers</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/AdminProfile">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'profile', hoveredItem === 'profile')}
              onClick={() => setActiveItem('profile')}
              onMouseEnter={() => setHoveredItem('profile')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-person" style={iconStyle} />
              <span>Profile</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            style={navLinkStyle(activeItem === 'contact', hoveredItem === 'contact')}
            onClick={() => setActiveItem('contact')}
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <i className="bi bi-envelope" style={iconStyle} />
            <span>Uploads</span>
          </a>
        </li>
        <li className="nav-item">
          <Link to="/PostForm">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'machineType', hoveredItem === 'machineType')}
              onClick={() => setActiveItem('machineType')}
              onMouseEnter={() => setHoveredItem('machineType')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-card-list" style={iconStyle} />
              <span>Downloads</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <a
              className="nav-link collapsed"
              style={navLinkStyle(activeItem === 'logout', hoveredItem === 'logout')}
              onClick={() => setActiveItem('logout')}
              onMouseEnter={() => setHoveredItem('logout')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className="bi bi-box-arrow-in-right" style={iconStyle} />
              <span>Logout</span>
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;



