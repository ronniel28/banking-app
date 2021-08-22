import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import MoneyTransferForm from "./MoneyTransferForm";

export default function TransferMoneyModal(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Button
                color="blue"
                type="button"
                buttonType="outline"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
               <div className="p-3 mr-4 bg-blue-700 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
</svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">Transfer Money</p>
    </div>
            </Button>

            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                Transfer Money
                </ModalHeader>
                <ModalBody>
                   <MoneyTransferForm
                   toTransfer={props.toTransfer}
                   contacts={props.contacts}
                   myAccounts={props.myAccounts} />
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

                   
                </ModalFooter>
            </Modal>
        </>
    );
}