import Button from "../components/Button.jsx";
import Search from "../components/Search.jsx";

const Hero = () => (
        <main className="bg-hero-pattern bg-center bg-cover w-full flex flex-col items-center h-screen bg-gray-50 px-10 py-12 sm:px-5 sm:py-20 lg:px-56 lg:py-24">
        <h1 className="font-bold text-center text-3xl sm:text-5xl lg:text-6xl text-gray-800">
            Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-center text-gray-500 max-w-3xl">
            A utility-first CSS framework packed with classes like <span className="text-blue-500 font-medium">flex</span>,
            <span className="text-blue-500 font-medium"> pt-4</span>,
            <span className="text-blue-500 font-medium"> text-center</span> and
            <span className="text-blue-500 font-medium"> rotate-90</span> that can be composed to build any design, directly in your markup.
        </p>
        <div className="mt-14 sm:flex w-full sm:w-auto flex-row gap-10">
            <Button text="Get Started"/>
            <Search text="Get Started"/>
        </div>

    </main>
)

export default Hero;