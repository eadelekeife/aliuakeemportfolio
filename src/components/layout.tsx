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
            <Nav display={props.display} />
            {props.children}
            <Footer />
        </div>
    )
}

export default DisplayLayout;