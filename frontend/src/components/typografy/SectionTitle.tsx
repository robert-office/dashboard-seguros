interface TypProps {
    text: string,
    justifyText?: string,
    otherStyles?: any
}

export const SectionTitle = ({ text, justifyText = "sm:text-left text-center", otherStyles }: TypProps) => {
    return (
        <p style={otherStyles} className={`sm:text-lg text-sm font-semibold font-serif text-secundaryColor flex ${justifyText}`}> {text} </p>
    );
}