import { BiUser } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { GoGraph, GoSignOut } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { RiPieChart2Fill, RiShoppingBag4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
type SidebarProps = {
  open: boolean
  setOpen: (args0: boolean) => void;

}
export default function Sidebar({ open, setOpen }: SidebarProps) {

  const menu = [
    { name: "Dashboard", icon: <RiPieChart2Fill />, route: "/" },
    { name: "Users", icon: <BiUser />, route: "/users" },
    { name: "Leaderboard", icon: <FiBarChart2 />, route: "/leaderboard" },
    { name: "Order", icon: <IoCartOutline />, route: "/order" },
    { name: "Products", icon: <RiShoppingBag4Line />, route: "/products" },
    { name: "Sales Report", icon: <GoGraph />, route: "/salesreport" },
    { name: "Messages", icon: <LuMessageSquareMore />, route: "/messages" },
    { name: "Settings", icon: <MdOutlineSettings />, route: "/settings" },
    { name: "Sign Out", icon: <GoSignOut />, route: "/signout" },
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`
          fixed md:static top-0 left-0 h-full z-50
          w-64 bg-white p-7 flex flex-col justify-between shadow-md
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div>
          <h1 className="text-2xl font-bold mb-6">Dabang</h1>

          <div className="flex flex-col gap-2">
            {menu.map((item, index) => (
              <NavLink
                key={index}
                to={item.route}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3.5 rounded-lg ${isActive
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

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-5 rounded-xl text-center">
          <p className="text-sm mb-2">Dabang Pro</p>
          <p className="text-xs mb-3">
            Get access to all features on tetumbas
          </p>
          <button className="bg-white text-indigo-600 px-3 py-1 rounded-md text-sm font-medium">
            Get Pro
          </button>
        </div>
      </div>
    </>
  );
}