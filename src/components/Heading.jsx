import React from "react";
import H4 from "@material-tailwind/react/Heading4";

export default function Heading(props) {
    return (
        <H4 color="white">{props.name}</H4>
    );
}