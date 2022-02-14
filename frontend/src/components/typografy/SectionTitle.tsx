interface TypProps {
    text: string
}

export const SectionTitle = ({ text }: TypProps) => {
    return (
        <p className='sm:text-lg text-sm font-semibold font-serif text-secundaryColor flex sm:text-left text-center'> {text} </p>
    );
}