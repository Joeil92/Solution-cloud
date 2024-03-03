import { CSSProperties, ReactNode } from "react"

type Tag = 'p' | 'span' | 'h3' | 'h2' | 'h1'

interface Props {
    children: ReactNode
    tag?: Tag
    className?: string
    style?: CSSProperties
    onClick?: () => void
}

export default function Typography({ children, tag = 'p', className = "", style = {}, onClick }: Props) {
    return (
        <>
            {
                tag === 'p' && <p className={`text-base text-gray-900 ${className} ${onClick ? "hover:text-primary-600 cursor-pointer" : ""}`} style={style} onClick={onClick}>{children}</p> ||
                tag === 'span' && <span className={`text-sm text-gray-900 ${className} ${onClick ? "hover:text-primary-600 cursor-pointer" : ""}`} style={style} onClick={onClick}>{children}</span> ||
                tag === 'h3' && <h3 className={`text-2xl text-gray-900 ${className} ${onClick ? "hover:text-primary-600 cursor-pointer" : ""}`} style={style} onClick={onClick}>{children}</h3> ||
                tag === 'h2' && <h2 className={`text-3xl text-gray-900 ${className} ${onClick ? "hover:text-primary-600 cursor-pointer" : ""}`} style={style} onClick={onClick}>{children}</h2> ||
                tag === 'h1' && <h1 className={`text-4xl text-gray-900 ${className} ${onClick ? "hover:text-primary-600 cursor-pointer" : ""}`} style={style} onClick={onClick}>{children}</h1>
            }
        </>
    )
}