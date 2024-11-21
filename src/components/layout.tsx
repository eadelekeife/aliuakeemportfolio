import React from "react";
import Footer from "./footer";
import Nav from "./nav";

type DisplayPropsInterface = {
    display?: string;
    children?: React.ReactElement;
}

const DisplayLayout = (props: DisplayPropsInterface) => {
    return (
        <div>
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}

export default DisplayLayout;