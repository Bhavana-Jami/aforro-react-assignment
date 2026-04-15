import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", loyal: 200, new: 180, unique: 220 },
  { name: "Feb", loyal: 250, new: 210, unique: 260 },
  { name: "Mar", loyal: 180, new: 170, unique: 240 },
  { name: "Apr", loyal: 150, new: 140, unique: 200 },
  { name: "May", loyal: 220, new: 200, unique: 210 },
  { name: "Jun", loyal: 260, new: 240, unique: 230 },
  { name: "Jul", loyal: 300, new: 280, unique: 260 },
];

export default function VisitorChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-80">
      <h3 className="text-sm font-semibold mb-4">Visitor Insights</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="loyal" stroke="#7c3aed" />
          <Line type="monotone" dataKey="new" stroke="#ef4444" />
          <Line type="monotone" dataKey="unique" stroke="#22c55e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}