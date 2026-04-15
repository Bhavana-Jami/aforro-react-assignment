import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", online: 4000, offline: 2400 },
  { day: "Tue", online: 3000, offline: 1398 },
  { day: "Wed", online: 2000, offline: 9800 },
  { day: "Thu", online: 2780, offline: 3908 },
  { day: "Fri", online: 1890, offline: 4800 },
  { day: "Sat", online: 2390, offline: 3800 },
  { day: "Sun", online: 3490, offline: 4300 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-80">
      <h3 className="text-sm font-semibold mb-4">Total Revenue</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="online" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          <Bar dataKey="offline" fill="#22c55e" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}