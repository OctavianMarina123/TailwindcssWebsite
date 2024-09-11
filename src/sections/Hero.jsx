import Button from "../components/Button.jsx";
import Search from "../components/Search.jsx";
import DynamicCard from "../components/DynamicCard.jsx";
import CodeCard from "../components/CodeCard.jsx";

const Hero = () => (
    <main className="bg-hero-pattern bg-center bg-cover w-full bg-gray-50 border-b border-gray-300">
        <div className="px-10 py-12 sm:px-5 sm:py-20 lg:px-56 lg:py-24 flex flex-col items-center">
            <h1 className="font-bold text-center text-3xl sm:text-5xl lg:text-6xl text-gray-800">
                Rapidly build modern websites without ever leaving your HTML.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-center text-gray-500 max-w-3xl">
                A utility-first CSS framework packed with classes like <span
                className="text-blue-500 font-medium">flex</span>,
                <span className="text-blue-500 font-medium"> pt-4</span>,
                <span className="text-blue-500 font-medium"> text-center</span> and
                <span className="text-blue-500 font-medium"> rotate-90</span> that can be composed to build any design,
                directly in your markup.
            </p>
            <div className="mt-14 sm:flex w-full sm:w-auto flex-row gap-10">
                <Button text="Get Started"/>
                <Search text="Get Started"/>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row px-12 lg:px-32 relative lg:top-10 gap-4 lg:gap-0">
            <DynamicCard/>
            <CodeCard/>
        </div>
    </main>
)

export default Hero;