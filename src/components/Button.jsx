const Button = ({text}) => {
    return(
        <button className="rounded-lg bg-[#0F172A] px-5 py-3 hover:bg-[#334155] sm:w-auto w-full">
            <span className="font-lg font-semibold text-white">{text}</span>
        </button>
    )
}
export default Button;