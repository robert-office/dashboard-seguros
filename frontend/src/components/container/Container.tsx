interface ContainerProps {
    children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="relative max-w-screen-2xl bg-containerColor sm:p-10 p-4">
            {children}
        </div>
    );
}