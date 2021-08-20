import React from "react";
import Button from "@material-tailwind/react/Button";

export default function SignOutButton(props) {

    function handleLogOut(){
        props.logOut()
    }
    return (
        <Button
            onClick={handleLogOut}
            color="red"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
        >
            <i class="fas fa-sign-out-alt"></i>Sign Out
        </Button>
    )
}