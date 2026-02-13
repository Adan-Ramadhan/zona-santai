import { Button } from "../ui/button";
// icon
import { CiPlay1 } from "react-icons/ci";
export default function CTASection() {
    return (
        <section className="w-full min-h-full my-36 px-4 xl:px-36 ">
            <div className="w-full lg:w-1/2 mx-auto text-center border border-gray-200 rounded-xl px-3 py-10">
                <h2 className="text-4xl font-bold mb-5">Ready to Streaming?</h2>
                <p className="text-lg text-slate-500 mb-5">Join millions of fans and start your free trial today. Cancel anytime</p>
                <Button className="bg-linear-to-r from-[#7c3aed] from-10% to-[#06b6d4] to-70% w-full lg:w-1/2  text-white">Explore Streaming <CiPlay1 /></Button>
            </div>
        </section>
    )
}