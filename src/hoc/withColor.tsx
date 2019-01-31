import React from "react";

export const withColor = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const colors = ["red", "blue", "orange"];
    const randomColor = colors[Math.floor(Math.random() * 3)];
    const className = `${randomColor}-text`;

    return (props: any) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withColor;
