interface TypProps {
    text: string
}

export const Subtitle = ({ text }: TypProps) => {
    return (
        <p className='sm:text-base text-xs font-medium font-serif text-secundaryColor flex sm:text-left text-center'> {text} </p>
    );
}