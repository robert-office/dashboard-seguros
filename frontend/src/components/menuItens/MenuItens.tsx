interface ImenuItens {
    text: string,
    children: React.ReactNode,
    href: string
}

export const MenuItens = ({ text, children, href }: ImenuItens) => {
    return (
        <a href={href} className="w-full flex flex-row h-14 border-collapse border-y border-borderColor bg-primaryColor hover:bg-primaryColorHovered justify-between px-8 ">

            <div style={{width: "50%"}} className="h-full flex">
                {children}
            </div>

            <div style={{width: "50%"}} className="h-full flex">
                <p className="text-fontColor text-left font-sans font-medium text-base self-center">
                    {text}
                </p>
            </div>
        </a>
    )
}