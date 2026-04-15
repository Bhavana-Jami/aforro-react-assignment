const data = [
    {
        id: "01",
        name: "Home Decor Range",
        popularity: 45,
        color: "bg-blue-500",
    },
    {
        id: "02",
        name: "Disney Princess Pink Bag 18'",
        popularity: 29,
        color: "bg-green-500",
    },
    {
        id: "03",
        name: "Bathroom Essentials",
        popularity: 18,
        color: "bg-purple-500",
    },
    {
        id: "04",
        name: "Apple Smartwatches",
        popularity: 25,
        color: "bg-orange-500",
    },
];

export default function TopProducts() {
    return (
        <div className="bg-white p-4 rounded-xl shadow h-75">
            <h3 className="text-sm font-bold mb-4">Top Products</h3>
            <div className="space-y-4">
                {data.map((item) => (
                    <div key={item.id} className="grid grid-cols-4 items-center gap-2">
                        <span className="text-gray-400 text-sm">{item.id}</span>
                        <span className="text-sm text-gray-700">{item.name}</span>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className={`${item.color} h-2 rounded-full`}
                                style={{ width: `${item.popularity}%` }}
                            />
                        </div>
                        <span className="text-xs border px-2 py-1 rounded-lg text-gray-600 w-fit">
                            {item.popularity}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}