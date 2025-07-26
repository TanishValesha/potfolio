import { CopyrightIcon } from "lucide-react"

const Header = () => {
    return (
        <div className="flex justify-center items-center gap-2 text-center mb-8">
            <div className="flex text-xl font-bold text-black">
                <h1 className="!text-2xl font-bold text-black gap-2">
                    CA<span className="text-gray-400">ARD</span>
                </h1>
                <CopyrightIcon className="text-gray-400 w-4 h-4" />
            </div>
        </div>
    )
}

export default Header