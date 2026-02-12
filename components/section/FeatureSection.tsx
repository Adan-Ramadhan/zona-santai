import { ReactNode } from "react";
// icon
import { LuLibrary } from "react-icons/lu";
import { LuMonitorPlay } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  backColor?: string;
}

const features: Feature[] = [
  {
    title: "Huge Anime Library",
    description:
      "Over 10,000+ titles from classics to the latest seasonal releases direct from Japan.",
    icon: <LuLibrary className="w-6 h-6 text-[#7c3aed]" />,
    backColor: "bg-[#7c3aed]/10",
  },
  {
    title: "High Quality (4K)",
    description:
      "Experience cinematic brilliance with Ultra HD and HDR support for all modern titles.",
    icon: <LuMonitorPlay className="w-6 h-6 text-cyan-500" />,
    backColor: "bg-cyan-500/10",
  },
  {
    title: "Watch Anywhere",
    description:
      "Stream seamlessly on your TV, phone, tablet, or gaming console with our native apps.",
    icon: <FiSmartphone className="w-6 h-6 text-pink-500" />,
    backColor: "bg-pink-500/10",
  },
  {
    title: "Personalized Recs",
    description:
      "Our AI-driven engine learns your taste to suggest exactly what you'll love next.",
    icon: <BsStars className="w-6 h-6 text-yellow-500" />,
    backColor: "bg-yellow-500/10",
  },
];

export default function FeatureSection() {
  return (
    <section className="w-full px-4 xl:px-36  min-h-full mb-20">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.length > 0 &&
            features.map((f, i) => {
              return (
                <li
                  key={i}
                  className="flex items-start flex-col gap-3 mb-4 bg-gray-50 p-3 rounded-xl"
                >
                  <div className={`mt-1 ${f.backColor} rounded-lg p-2`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg xl:text-xl">{f.title}</h3>
                    <p className="text-slate-500 text-sm xl:text-base">{f.description}</p>
                  </div>
                </li>
              );
            })}
        </ul>
    </section>
  );
}
