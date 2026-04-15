import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { name: "Jan", last: 2000, current: 2400 },
    { name: "Feb", last: 1800, current: 2600 },
    { name: "Mar", last: 2200, current: 2100 },
    { name: "Apr", last: 1700, current: 2800 },
];

export default function SatisfactionChart() {
    return (
        <div className="bg-white p-4 rounded-xl shadow h-67">
            <h3 className="text-sm font-bold mb-4">Customer Satisfaction</h3>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={data}>
                    <Tooltip />
                    <Line type="monotone" dataKey="last" stroke="#3b82f6" />
                    <Line type="monotone" dataKey="current" stroke="#22c55e" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}