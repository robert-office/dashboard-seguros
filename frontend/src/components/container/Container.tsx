interface ContainerProps {
    children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="relative mt-4 mx-4 min-w-max max-w-screen-xl bg-containerColor p-10">
            {children}
        </div>
    );
}