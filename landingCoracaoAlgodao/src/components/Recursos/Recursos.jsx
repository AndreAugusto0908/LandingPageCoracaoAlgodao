import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../../Constants/Index";
import ImagemDashboard from "../../assets/dashboard.png";

export default function Recursos() {
    return (
        <div className="mt-20 border-b border-neutral-800">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Recursos que serão disponibilizados
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2 mt-10">
                    <img src={ImagemDashboard} alt="Dashboard" />
                </div>
                <div className="pt-12 w-full lg:w-1/2 mt-10">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};