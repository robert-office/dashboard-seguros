type IbuttonSubbmit = {
    title: string,
    className?: string
}

export const ButtonSubbmit = ({title, className}: IbuttonSubbmit) => {
    return (
        <button type="submit" className={`sm:w-auto w-full flex flex-col bg-secundaryColor p-3 my-5 rounded-sm group shadow-sm ${className}`}>
            <p className="w-full font-bold text-sm text-white text-center">
                {title}
            </p>
        </button>
    );
}