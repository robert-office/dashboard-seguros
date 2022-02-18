interface DHProps {
    children?: React.ReactNode;
}

export const DHeader = ({ children }: DHProps) => {
    return (
        <p style={{
            color: "white",
            width: "100%",
            textAlign: "left"
        }}>
            {children}
        </p>
    );
}