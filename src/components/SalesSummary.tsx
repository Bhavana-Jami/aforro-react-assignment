import SalesCard from "./SalesCard";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoPricetagSharp } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { MdOutlineFileUpload } from "react-icons/md";

export const salesData = [
  {
    id: 1,
    title: "Total Sales",
    subTitle: "+8% from yesterday",
    value: "$1k",
    icon: <BsFillFileBarGraphFill className="text-pink-500" />,
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    title: "Total Order",
    subTitle: "+5% from yesterday",
    value: "300",
    icon: <TbNotes className="text-orange-500" />,
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "Product Sold",
    subTitle: "+1.2% from yesterday",
    value: "5",
    icon: <IoPricetagSharp className="text-green-500" />,
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    title: "New Customers",
    subTitle: "0.5% from yesterday",
    value: "8",
    icon: <FaUsers className="text-purple-500" />,
    bgColor: "bg-purple-100",
  },
];
export default function SalesSummary() {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-sm font-bold mb-1">Today's Sales</h3>
                    <p className="text-sm text-gray-500">Sales Summary</p>
                </div>
                <div className="border px-3 py-1 rounded-lg hover:bg-gray-100 flex items-center gap-2 justify-center">
                    <MdOutlineFileUpload className="text-lg" />
                    <button className="text-sm">Export</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {salesData.map((item) => (
                    <SalesCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}