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
        <div className="bg-white p-4 rounded-xl shadow h-75 flex justify-center align-middle flex-col">
            <h3 className="text-sm font-bold mb-4">Top Products</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="text-gray-400 text-xs border-b border-gray-300">
                        <tr>
                            <th className="text-left pb-2">#</th>
                            <th className="text-left pb-2">Name</th>
                            <th className="text-left pb-2">Popularity</th>
                            <th className="text-left pb-2">Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b border-gray-300 last:border-none">
                                <td className="py-3 text-gray-400">{item.id}</td>
                                <td className="py-3 text-gray-700">{item.name}</td>
                                <td className="py-3 w-[40%]">
                                    <div className="w-40 bg-gray-200 h-2 rounded-full">
                                        <div
                                            className={`${item.color} h-2 rounded-full`}
                                            style={{ width: `${item.popularity}%` }}
                                        />
                                    </div>
                                </td>
                                <td className="py-3">
                                    <span className={`text-xs border px-2 py-1 rounded-lg text-${item.color.slice(3)} h-2 rounded-full`}>
                                        {item.popularity}%
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}