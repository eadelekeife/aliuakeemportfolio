import React from "react";
import Footer from "./footer";
import Nav from "./nav";

type DisplayPropsInterface = {
    position?: "relative" | "fixed";
    display?: string;
    children?: React.ReactElement;
}

const DisplayLayout = (props: DisplayPropsInterface) => {
    return (
        <div>
            <Nav position={props.position} />
            {props.children}
            <Footer />
        </div>
    )
}

export default DisplayLayout;