export default function Navbar() {
  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded-lg"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}