import { ReactNode } from "react"

type TagType = 'primary' | 'primary-outline' | 'success' | 'success-outline' | "danger"

interface Props {
    children: ReactNode
    type?: TagType
    onClick: () => void
}

export default function Button({ children, onClick, type = "primary" }: Props) {

    const handleClassName = () => {
        if(type === 'primary') {
            return "text-white uppercase text-xs font-medium bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-3 px-4 my-3 text-center";
        } else if(type === 'primary-outline') {
            return "text-primary-500 uppercase text-xs font-medium border-primary-700 bg-transparent hover:bg-primary-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-3 px-4 my-3 text-center";
        } else if (type === "danger") {
            return "text-white uppercase text-xs font-medium bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-3 px-4 my-3 text-center";
        } else {
            return "";
        }
    }

    return (
        <button
            className={handleClassName()}
            onClick={() => onClick()}
        >{children}</button>
    )
}