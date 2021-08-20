import React from "react";
import Input from "@material-tailwind/react/Input";

export default function ExpensesInput(props) {

    function handleChange(event){
        props.onChange(event);
        console.log(event)
    }


    return (
        <Input
            name={props.name}
            value={props.value}
            onChange={handleChange}
            type={props.type}
            color="lightBlue"
            size="lg"
            outline={false}
            placeholder={props.placeholder}
        />
    )
}