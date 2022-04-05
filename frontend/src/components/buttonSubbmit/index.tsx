type IbuttonSubbmit = {
    title: string,
    className?: string
}

export const ButtonSubbmit = ({title, className}: IbuttonSubbmit) => {
    return (
        <button type="submit" className={`sm:w-auto w-full flex flex-col bg-secundaryColor p-2 mb-10 mt-5 rounded-sm group shadow-sm ${className}`}>
            <p className="w-full font-bold text-sm text-white mt-1 text-center">
                {title}
            </p>
            
            <span className="w-0 transition-all group-hover:w-full h-1 bg-white"></span>
        </button>
    );
}