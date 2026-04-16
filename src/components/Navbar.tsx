import { FaSearch } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

type NavbarProps = {
  setOpen: (args0: boolean) => void;
};

export default function Navbar({ setOpen }: NavbarProps) {
  return (
    <div className="bg-white shadow-sm">
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer text-gray-700"
          onClick={() => setOpen(true)}
        />
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

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-11 py-3">
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
            <FaSearch className="text-gray-400 mr-2 text-lg" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
          <select className="p-2 text-sm font-medium text-gray-600 bg-transparent outline-none cursor-pointer">
            <option>Eng (US)</option>
            <option>Eng (UK)</option>
          </select>

          <div className="relative cursor-pointer">
            <IoIosNotificationsOutline className="text-yellow-600 text-2xl" />
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
    </div>
  );
}