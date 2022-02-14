interface ContainerProps {
    children?: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="relative sm:mt-4 sm:mx-4 mt-1 mx-1 min-w-max max-w-screen-xl bg-containerColor sm:p-10 p-4">
            {children}
        </div>
    );
}