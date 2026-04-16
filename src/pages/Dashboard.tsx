import RevenueChart from "../charts/RevenueChart";
import SatisfactionChart from "../charts/SatisfactionChart";
import TargetChart from "../charts/TargetChart";
import VisitorChart from "../charts/VisitorChart";
import SalesMap from "../components/SalesMap";
import SalesSummary from "../components/SalesSummary";
import TopProducts from "../components/TopProducts";
import VolumeChart from "../components/VolumeChart";
import '../index.css'

export default function Dashboard() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-7 gap-4">
            <div className="xl:col-span-4">
                <SalesSummary />
            </div>
            <div className="xl:col-span-3">
                <VisitorChart />
            </div>
            <div className="xl:col-span-3" >
                <RevenueChart />
            </div>
            <div className="xl:col-span-2">
                <SatisfactionChart />
            </div>
            <div className="xl:col-span-2">
                <TargetChart />
            </div>
            <div className="xl:col-span-3" >
                <TopProducts />
            </div>
            <div className="xl:col-span-2">
                <SalesMap />
            </div>
            <div className="xl:col-span-2">
                <VolumeChart />
            </div>
        </div>
    );
}