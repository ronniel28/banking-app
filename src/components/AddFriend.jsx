import React,{useState} from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";


export default function AddFriend(props) {
const [contactInfo, setContactInfo] = useState({
    accountName:"",
    accountNumber:"",
    initialAmount:""
})
    function handleChange(event){
        const {name, value} = event.target;
        setContactInfo(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

    function toSubmit(){
        props.toAdd(contactInfo);
        setContactInfo({
            accountName:"",
            accountNumber:"",
            initialAmount:""
        })
    }
    return (
        <Card>
            <CardHeader color="blue" size="lg">
                <H5 color="white">Add Contact</H5>
            </CardHeader>

            <CardBody>
                <div className="mt-4 mb-8 px-4">
                    <InputIcon
                        name="accountName"
                        value={contactInfo.accountName}
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
                        value={contactInfo.accountNumber}
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
                        value={contactInfo.initialAmount}
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
                        color="lightBlue"
                        buttonType="link"
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