import type { ReactNode } from "react";

export default function Container ({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`max-w-7xl mx-auto lg:px-8 md:px-5 px-3 ${className ? className : ''}`}>
            { children }
        </div>
    )
}