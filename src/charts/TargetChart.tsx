import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { name: "Jan", reality: 4000, target: 2400 },
    { name: "Feb", reality: 3000, target: 1398 },
    { name: "Mar", reality: 2000, target: 9800 },
    { name: "Apr", reality: 2780, target: 3908 },
];

export default function TargetChart() {
    return (
        <div className="bg-white p-4 rounded-xl shadow h-67">
            <h3 className="text-sm font-bold mb-4">Target vs Reality</h3>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="reality" fill="#22c55e" />
                    <Bar dataKey="target" fill="#facc15" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}