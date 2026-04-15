import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", volume: 30, service: 20 },
  { name: "Feb", volume: 50, service: 30 },
  { name: "Mar", volume: 40, service: 15 },
  { name: "Apr", volume: 35, service: 20 },
  { name: "May", volume: 25, service: 15 },
  { name: "Jun", volume: 30, service: 25 },
];

export default function VolumeChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-75">
      <h3 className="text-sm font-bold mb-4">
        Volume vs Service Level
      </h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="volume" fill="#3b82f6" />
          <Bar dataKey="service" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}