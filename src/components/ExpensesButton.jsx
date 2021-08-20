import React from "react";
import Button from "@material-tailwind/react/Button";

export default function ExpensesButton(props) {

    function handleClick(){
        props.toAdd();
    }
    return (
        <Button
            onClick={handleClick}
            color="lightBlue"
            buttonType="outline"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="dark"
        >
            Add
        </Button>
    )
}