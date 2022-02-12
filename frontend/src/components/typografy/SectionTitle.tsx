interface TypProps {
    text: string
}

export const SectionTitle = ({ text }: TypProps) => {
    return (
        <p className='text-lg font-semibold font-serif text-secundaryColor lg:flex hidden'> {text} </p>
    );
}