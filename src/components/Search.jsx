import {MagnifyingGlassIcon} from "@heroicons/react/16/solid/index.js";

const Search = () => {
    return (
        <div className="sm:flex hidden justify-between items-center bg-white rounded-lg border border-gray-300 w-72 px-5">
            <div className="flex">
                <MagnifyingGlassIcon className="text-gray-300 h-5 w-5"/>
                <span className="text-gray-400 ml-3 text-sm">Quick Search...</span>
            </div>
            <span className="text-gray-300 font-semibold">Ctrl <span className="text-gray-400">K</span></span>
        </div>
    )
}
export default Search;