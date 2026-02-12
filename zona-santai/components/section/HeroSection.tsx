import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Button } from "../ui/button";
export default function HeroSection() {
    return (
        <section className="w-full lg:w-1/2 md:pt-36 min-h-full pt-20 p-4">
            <div className="w-full">
                <p className="text-primary text-sm font-semibold mb-5 uppercase">Premium Streaming Experience</p>
                <h1 className="font-bold text-6xl xl:text-7xl xl:leading-20 leading-16 mb-10">Streaming <span className="bg-linear-to-br from-primary to-secondary bg-clip-text text-transparent ">Anime & Movie</span> Anytime, Anywhere</h1>
                <p className="text-slate-500 text-lg leading-6 mb-5">Discover thousands of anime and movies in one place, updated daily with high-quality streaming. The ultimate destination for cinema lovers and otakus alike.</p>

                <div className="w-full md:w-1/4 flex justify-between items-center">
                    <Button variant={"main"} size={"default"}>Explore Now <FaRegArrowAltCircleRight /></Button>
                </div>
            </div>
        </section>
    )
}