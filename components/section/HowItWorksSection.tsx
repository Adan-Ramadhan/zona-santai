import { ReactNode } from "react";
// icon
import { CiSearch } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { LuCirclePlay } from "react-icons/lu";
interface HtwItem {
  title: string;
  desc: string;
  icon: ReactNode;
  backColor: string;
}

const htwItem: HtwItem[] = [
  {
    title: "Explore Content",
    desc: "Browse our vast library and find your next favorite story.",
    icon: <CiSearch className="w-7 h-7 text-[#7c3aed]" />,
    backColor: "bg-[#7c3aed]/10",
  },
  {
    title: "Choose Anime or Movie",
    desc: "Select from thousands of high-quality titles across genres.",
    icon: <RiSendPlaneLine className="w-7 h-7 text-cyan-500" />,
    backColor: "bg-cyan-500/10",
  },
  {
    title: "Stream Instantly",
    desc: "Hit play and enjoy uninterrupted viewing on any device.",
    icon: <LuCirclePlay className="w-7 h-7 text-pink-500" />,
    backColor: "bg-pink-500/10",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full px-4 xl:px-36  min-h-full mb-20">
      <h2 className="font-bold text-4xl text-center mb-16">How It Works</h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {htwItem.length > 0 &&
          htwItem.map((item, index) => {
            return (
              <li key={index} className="w-full flex flex-col items-center justify-center text-center mb-8 gap-4">
                <div className={`mr-4 mt-1 rounded-full ${item.backColor} p-4`}>{item.icon}</div>
                <div className="w-full xl:w-1/2">
                  <h3 className="font-bold text-lg xl:text-xl">{item.title}</h3>
                  <p className="text-slate-500 text-sm xl:text-base" >{item.desc}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
