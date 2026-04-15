import RevenueChart from "../charts/RevenueChart";
import SatisfactionChart from "../charts/SatisfactionChart";
import TargetChart from "../charts/TargetChart";
import VisitorChart from "../charts/VisitorChart";
import SalesSummary from "../components/SalesSummary";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <SalesSummary />
            <div className="xl:col-span-2">
                <RevenueChart />
            </div>
            <VisitorChart />
            <SatisfactionChart />
            <TargetChart />
        </div>
    );
}