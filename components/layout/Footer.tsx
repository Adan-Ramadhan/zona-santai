// icon
import { ReactNode } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

interface Sosmed {
  title: string;
  url: string;
  icon: ReactNode;
}

const sosmed: Sosmed[] = [
  {
    title: "Instagram",
    url: "",
    icon: <FaInstagram className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Facebook",
    url: "",
    icon: <FaFacebook className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Tiktok",
    url: "",
    icon: <FaTiktok className="w-6 h-6 text-gray-500" />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full min-h-full">
      <div className="w-full px-4 xl:px-36">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-5">Zona Nonton</h2>
          <p className="text-sm text-slate-500">
            Discover thousands of anime and movies in one place, updated daily
            with high-quality streaming. The ultimate destination for cinema
            lovers and otakus alike.
          </p>
          <ul className="flex items-start gap-3 mt-5">
            {sosmed.length > 0 &&
              sosmed.map((s, i) => {
                return (
                  <li key={i} className="bg-gray-100 p-2 rounded-full">
                    <a href={s.url} target="_blank">
                      {s.icon}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
