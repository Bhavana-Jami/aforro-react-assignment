import { BiUser } from "react-icons/bi";
import { BsDashCircleDotted, BsDashCircleFill } from "react-icons/bs";
import {
  FaChartPie,
  FaChartBar,
  FaShoppingCart,
  FaBox,
  FaFileAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <FaChartPie />, route: "/" },
    { name: "Users", icon: <BiUser />, route: "/users" },
    { name: "Leaderboard", icon: <FaChartBar />, route: "/leaderboard" },
    { name: "Order", icon: <FaShoppingCart />, route: "/order" },
    { name: "Products", icon: <FaBox />, route: "/products" },
    { name: "Sales Report", icon: <FaFileAlt />, route: "/salesreport" },
    { name: "Messages", icon: <FaEnvelope />, route: "/messages" },
    { name: "Settings", icon: <FaCog />, route: "/settings" },
    { name: "Sign Out", icon: <FaSignOutAlt />, route: "/signout" },
  ];

  return (
    <div className="w-64 bg-white p-8 flex flex-col justify-between shadow-md">
      <div>
        <div className="flex">
          <BsDashCircleFill className="text-xl font-bold mr-1.5 -mb-3"/>
          <h1 className="text-xl font-bold mb-6">Dabang</h1>
        </div>
        <div className="flex flex-col gap-2">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.route}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg ${isActive
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="bg-linear-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl text-center">
        <p className="text-sm mb-2">Dabang Pro</p>
        <p className="text-xs mb-3">Get access to all features</p>
        <button className="bg-white text-indigo-600 px-3 py-1 rounded-md text-sm font-medium">
          Get Pro
        </button>
      </div>
    </div>
  );
}