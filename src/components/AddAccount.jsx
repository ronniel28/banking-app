import React,{useState} from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";


export default function AddAccount(props) {
const [accountInfo, setAccountInfo] = useState({
    accountName:"",
    accountNumber:"",
    initialAmount:""
})
    function handleChange(event){
        const {name, value} = event.target;
        setAccountInfo(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

    function toSubmit(){
        props.addMyAccount(accountInfo);
        setAccountInfo({
            accountName:"",
            accountNumber:"",
            initialAmount:""
        })
    }
    return (
        <Card className="h-full">
            <CardHeader color="blue" size="lg">
                <H5 color="white">Add Account</H5>
            </CardHeader>

            <CardBody>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        name="accountName"
                        value={accountInfo.accountName}
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
                        value={accountInfo.accountNumber}
                        onChange={handleChange}
                        type="number"
                        color="lightBlue"
                        placeholder="Account Number"
                        iconName="payment"
                    />
                </div>
                <div className="mb-4 px-4">
                    <InputIcon
                        name="initialAmount"
                        value={accountInfo.initialAmount}
                        onChange={handleChange}
                        type="number"
                        color="lightBlue"
                        placeholder="Initial Amount"
                        iconName="money"
                    />
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-center">
                    <Button
                        onClick={toSubmit}
                        color="blue"
                        buttonType="filled"
                        size="lg"
                        ripple="dark"
                    >
                        Add
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}