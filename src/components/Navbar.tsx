import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Navbar() {
  return (
    <div className="bg-white px-11 py-3 flex items-center justify-between shadow-sm">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Dashboard
        </h1></div>
      <div className="flex gap-10">
        <div className="flex items-center bg-gray-100 px-3 py-3 rounded-lg w-87.5">
          <FaSearch className="text-gray-400 mr-2 text-lg font-bold" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
            <select className="p-3 font-bold">
              <option className="p-3">Eng (US)</option>
              <option className="p-3">Eng (UK)</option>
            </select>
          </div>
          <div className="relative cursor-pointer">
            <span className="bg-amber-200 rounded-sm h-48 w-2">
              <IoIosNotificationsOutline className="text-yellow-600 text-2xl" />
            </span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-700">Musfiq</p>
              <p className="text-gray-400 text-xs">Admin</p>
            </div>
          </div>

        </div></div>
    </div>
  );
}