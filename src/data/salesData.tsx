import { FaChartBar, FaShoppingBag, FaTag, FaUsers } from "react-icons/fa";

export const salesData = [
  {
    id: 1,
    title: "Total Sales",
    subTitle: "+8% from yesterday",
    value: "$1k",
    icon: <FaChartBar className="text-pink-500" />,
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    title: "Total Order",
    subTitle: "+5% from yesterday",
    value: "300",
    icon: <FaShoppingBag className="text-orange-500" />,
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "Product Sold",
    subTitle: "+1.2% from yesterday",
    value: "5",
    icon: <FaTag className="text-green-500" />,
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