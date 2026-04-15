type CardProps = {
    title: string;
    subTitle: string;
    value: string;
    icon: React.ReactNode;
    bgColor: string;
};

export default function SalesCard({
    title,
    subTitle,
    value,
    icon,
    bgColor,
}: CardProps) {
    return (
        <div className={`p-4 rounded-xl ${bgColor} flex flex-col gap-3`}>
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                {icon}
            </div>
            <div className="text-xl font-bold text-gray-800">
                {value}
            </div>
            <div className="text-sm text-gray-600">
                {title}
            </div>
            <div className="text-xs text-blue-500 font-medium">
                {subTitle}
            </div>
        </div>
    );
}