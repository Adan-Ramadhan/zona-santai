import Link from "next/link";


interface Menu {
    title: string;
    url: string
}

const menus: Menu[] = [
    { title: "Anime", url: "/anime" },
    { title: "Movie", url: "/movie" },
    { title: "Mang\a", url: "/manga" },
]

export default function Header() {
    return (
        <header className="w-full h-auto p-4 fixed top-0 left-0 z-50 backdrop-blur-lg">
            <div className="w-full flex justify-between">

                <div className="w-full">
                    <h1 className="font-bold text-xl tracking-wide">Zona Nonton</h1>
                </div>
                <nav className="w-full hidden lg:block ">
                    <ul className="flex items-center justify-end gap-4">
                        {menus.length > 0 && menus.map((m, i) => {
                            return (
                                <li key={i} className="text-slate-500">
                                    <Link href={m.url}>
                                        {m.title}
                                    </Link>

                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}