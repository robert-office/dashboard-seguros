interface ContainerProps {
    children?: React.ReactNode;
}

export const Container = ( { children }: ContainerProps ) => {
    return (
        <section className="w-full ml-3 mt-3 p-10 bg-containerColor">
            { children }
        </section>
    );
}