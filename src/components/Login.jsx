import React , {useState} from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import H5 from "@material-tailwind/react/Heading5";

export default function Login(props) {
    const [credential, setCredential]= useState({
        username:"",
        password:""
    });

    function handleChange(event){
        const{name, value}=event.target;

        setCredential(prevValue=>{
            return{...prevValue,
            [name]:value}
        })
    }

    function submit(){
        props.login(credential)
    }

    return (<div className="h-screen w-screen flex justify-center items-center bg-blue-700">
    <div className= " flex justify-center items-center h-2/4 w-2/6">
    <Card>
        <CardHeader color="lightBlue" size="lg">
            <H5 color="white">{props.messege}</H5>
        </CardHeader>

        <CardBody>
            <div className="mt-4 mb-8 px-4">
                <InputIcon
                value={credential.username}
                    name="username"
                    onChange={handleChange}
                    type="text"
                    color="lightBlue"
                    placeholder="Username"
                    iconName="account_circle"
                />
            </div>
            {/* <div className="mb-8 px-4">
                <InputIcon
                    type="email"
                    color="lightBlue"
                    placeholder="Email Address"
                    iconName="email"
                />
            </div> */}
            <div className="mb-4 px-4">
                <InputIcon
                value={credential.password}
                    name="password"
                    onChange={handleChange}
                    type="password"
                    color="lightBlue"
                    placeholder="password"
                    iconName="lock"
                />
            </div>
        </CardBody>
        <CardFooter>
            <div className="flex justify-center">
                <Button
                    onClick ={submit}
                    color="lightBlue"
                    buttonType="link"
                    size="lg"
                    ripple="dark"
                >
                    Sign In
                </Button>
            </div>
        </CardFooter>
    </Card>
    </div>
    </div>
        
    );
}