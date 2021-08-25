import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import EditAccount from "./EditAccount";

export default function LargeModal(props) {
    const [showModal, setShowModal] = useState(false);
    const [changes,setChanges]=useState({})

    function handleClick(){
        setShowModal(true);
    }

    function addToChanges(input){
        setChanges(prevValue=>{
            return {...prevValue,input}
        })
    }

    function saveChangesButton(){
        // props.editMyAccount(changes)
        console.log(changes)
    }

    return (
        <>
            <Button
               
                className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600"
                
                type="button"
                onClick={handleClick}
                
            >
            <i className="fas fa-user-edit"></i>
               Edit
            </Button>

            <Modal className="bg-blue-400" size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Edit Account
                </ModalHeader>
                <ModalBody>
                   <EditAccount
                   addToChanges={addToChanges}
                    account={props.account} />
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={saveChangesButton}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}