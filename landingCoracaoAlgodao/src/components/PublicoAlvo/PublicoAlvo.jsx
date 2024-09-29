import { CheckCircle2 } from "lucide-react";
import { publicoAlvo } from "../../Constants/Index";

export default function PublicoAlvo() {
    return (
      <div className="mt-20 border-b border-neutral-800">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Público-Alvo
        </h2>
        <div className="flex flex-wrap justify-center">
          {publicoAlvo.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-8 border border-neutral-300 bg-white shadow-lg rounded-xl text-center">
                <p className="text-3xl font-bold mb-6">
                  {option.title}
                </p>
                <ul className="text-left">
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-4 flex items-start">
                      <CheckCircle2 className="text-green-500 mr-2" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
