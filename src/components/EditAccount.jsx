import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";

export default function EditAccount(props) {

    const [editInput, setEditInput] = useState({
        accountType:"Contacts",
        accountName: props.account.accountName,
        accountNumber: props.account.accountNumber,
        initialAmount: props.account.initialAmount,
        accountEmail: props.account.accountEmail,
        accountFullName:props.account.accountFullName
    })

    function handleChange(event){
        const{name,value}=event.target
        setEditInput(prevValue=>{
            return{...prevValue,
            [name]:value}
        })
        props.addToChanges(editInput)
    }
    return (
        <div className="w-96">
        <Card className="bg-gray-100">

            <CardBody >
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        name="accountFullName"
                        value={editInput.accountFullName}
                        onChange={handleChange}
                        type="text"
                        color="lightBlue"
                        placeholder="Full Name"
                        iconName="account_circle"
                    />
                </div>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                    name="accountName"
                    value={editInput.accountName}
                       onChange={handleChange}
                        type="text"
                        color="lightBlue"
                        placeholder="Account Name"
                        iconName="account_circle"
                    />
                </div>
                <div className="mb-8 px-4">
                    <InputIcon
                    name="accountNumber"
                        value={editInput.accountNumber}
                        onChange={handleChange}
                        type="email"
                        color="lightBlue"
                        placeholder="Account Number"
                        iconName="payment"
                    />
                    </div>
                <div className="mb-8 px-4">
                    <InputIcon
                    name="accountEmail"
                    value={editInput.accountEmail}
                        onChange={handleChange}
                        type="email"
                        color="lightBlue"
                        placeholder="Email Address"
                        iconName="email"
                    />
                </div>
            </CardBody>
            <CardFooter>
                
            </CardFooter>
        </Card>
        </div>
    );
}