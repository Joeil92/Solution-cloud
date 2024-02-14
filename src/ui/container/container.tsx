import { CSSProperties, ReactNode } from "react"

interface Props {
    children: ReactNode
    id?: string
    className?: string
    style?: CSSProperties
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

export default function Container({ children, id, className = "", style, onMouseEnter, onMouseLeave }: Props) {
    return (
        <div 
            id={id} 
            className={className} 
            style={style} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >{children}</div>
    )
}