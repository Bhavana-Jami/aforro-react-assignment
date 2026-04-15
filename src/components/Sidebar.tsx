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
import {GiSpiralTentacle } from "react-icons/gi";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: <FaChartPie /> },
    { name: "Leaderboard", icon: <FaChartBar /> },
    { name: "Order", icon: <FaShoppingCart /> },
    { name: "Products", icon: <FaBox /> },
    { name: "Sales Report", icon: <FaFileAlt /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Sign Out", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="w-64 bg-white p-8 flex flex-col justify-between shadow-md">
      <div>
        <div className="flex">
          <h1 className="text-xl font-bold mr-1.5 -mb-3"><GiSpiralTentacle /></h1>
          <h1 className="text-xl font-bold mb-6">Dabang</h1>
        </div>
        <div className="flex flex-col gap-2">
          {menu.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${index === 0
                  ? "bg-indigo-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl text-center">
        <p className="text-sm mb-2">Dabang Pro</p>
        <p className="text-xs mb-3">Get access to all features</p>
        <button className="bg-white text-indigo-600 px-3 py-1 rounded-md text-sm font-medium">
          Get Pro
        </button>
      </div>
    </div>
  );
}