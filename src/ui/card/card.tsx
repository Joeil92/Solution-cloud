import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
}

export default function Card({ children, className = "" }: Props) {
    return (
        <div className={`bg-primary-800 p-3 border border-primary-600 rounded-md ${className}`}>{children}</div>
    )
}