import { FaSearch, FaBell } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white px-6 py-3 flex items-center justify-between shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h1>
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[350px]">
        <FaSearch className="text-gray-400 mr-2 text-sm" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
          <span>🇺🇸</span>
          <span>Eng (US)</span>
        </div>
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-lg" />
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

      </div>
    </div>
  );
}