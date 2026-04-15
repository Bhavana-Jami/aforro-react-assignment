import SalesCard from "./SalesCard";
import { salesData } from '../data/salesData'
export default function SalesSummary() {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-lg font-semibold">Today's Sales</h2>
                    <p className="text-sm text-gray-500">Sales Summary</p>
                </div>

                <button className="border px-3 py-1 rounded-lg text-sm hover:bg-gray-100">
                    Export
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {salesData.map((item) => (
                    <SalesCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}