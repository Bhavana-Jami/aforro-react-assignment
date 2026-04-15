export default function SalesMap() {
  return (
    <div className="bg-white p-4 rounded-xl shadow relative h-75">
      <h3 className="text-sm font-bold mb-4">
        Sales Mapping by Country
      </h3>

      <div className="relative">
        {/* Map Image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="map"
          className="w-full opacity-60"
        />

        {/* Colored regions (approx positions) */}
        <div className="absolute top-[40%] left-[20%] w-6 h-6 bg-yellow-400 rounded"></div>
        <div className="absolute top-[60%] left-[30%] w-6 h-6 bg-red-400 rounded"></div>
        <div className="absolute top-[35%] left-[60%] w-6 h-6 bg-purple-500 rounded"></div>
        <div className="absolute top-[55%] left-[55%] w-6 h-6 bg-blue-500 rounded"></div>
        <div className="absolute top-[50%] left-[70%] w-6 h-6 bg-green-500 rounded"></div>
      </div>
    </div>
  );
}