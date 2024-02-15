import { Dispatch, SetStateAction } from "react"

interface Props {
    placeholder: string
    handleChange: Dispatch<SetStateAction<string>>
}

export default function Searchbar({ placeholder, handleChange }: Props) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input 
                type="search" 
                id="default-search" 
                className="block w-full p-2 ps-10 text-sm appearance-none leading-tight text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-primary-500" 
                placeholder={placeholder}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}