import React from "react";
import Alert from "@material-tailwind/react/Alert";

export default function AlertNotif(props) {
    return (
        <Alert color="red">{props.messege}</Alert>
    );
}