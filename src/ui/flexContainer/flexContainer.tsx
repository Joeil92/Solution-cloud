import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
    justify: 'center' | 'start' | 'end' | 'between' | 'around'
    items: 'center' | 'top' | 'bottom'
    gap?: number
    onClick?: () => void
}

export default function FlexContainer({ children, className = "", justify, items, gap, onClick }: Props) {
    return (
        <div className={`flex justify-${justify} align-${items} gap-${gap} ${className}`} onClick={onClick}>{children}</div>
    )
}