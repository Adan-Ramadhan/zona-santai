// icon
import Link from "next/link";
import { ReactNode } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

interface Sosmed {
  title: string;
  url: string;
  icon: ReactNode;
}

interface Categorie {
  title: string;
  url: string
}
interface Support {
  title: string;
  url: string
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


const categories: Categorie[] = [
  {
    title: "Anime",
    url: "#",
  },
  {
    title: "Movie",
    url: "#",
  },
  {
    title: "Manga",
    url: "#",
  },
]

const supports: Support[] = [
  {
    title: "Help Center",
    url: "#",
  },
  {
    title: "Account",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Privacy Polic",
    url: "#",
  },
]

export default function Footer() {
  return (
    <footer className="w-full min-h-full my-20 border-t">
      <div className="w-full px-4 xl:px-36 flex pt-10 flex-col items-start gap-10 lg:flex-row">
        <div className="w-full ">
          <h2 className="text-2xl font-bold lg:text-4xl mb-5">Zona Nonton</h2>
          <p className="text-sm text-slate-500 lg:text-base">
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

        <ul className="w-full flex flex-col items-start gap-2">
          <li><h3 className="text-xl font-semibold">Categories</h3></li>
          {categories.length > 0 && categories.map((c, i) => {
            return (
              <li key={i} >
                <Link href={c.url} className="text-base text-slate-500 hover:text-slate-700">
                  {c.title}
                </Link>
              </li>
            )
          })}
        </ul>

        <ul className="w-full flex flex-col items-start gap-2">
          <li><h3 className="text-xl font-semibold">Support</h3></li>
          {supports.length > 0 && supports.map((c, i) => {
            return (
              <li key={i} >
                <Link href={c.url} className="text-base text-slate-500 hover:text-slate-700">
                  {c.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  );
}
