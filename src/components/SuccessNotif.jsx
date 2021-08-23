import React from "react";
import Alert from "@material-tailwind/react/Alert";

export default function SuccessNotif(props) {
    return (
        <Alert color="lightBlue">{props.messege}</Alert>
    );
}