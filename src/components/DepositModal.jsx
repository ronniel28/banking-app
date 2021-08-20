import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";

export default function DepositModal() {
    const [showModal, setShowModal] = React.useState(false);

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
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-900">Deposit</p>
        
      </div>
            </Button>

            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Deposit
                </ModalHeader>
                <ModalBody>
                <p className="text-base leading-relaxed text-gray-600 font-normal">
                    <i class="fas fa-hard-hat"></i> ThisPage is under construction.
                    </p>
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
                        onClick={(e) => setShowModal(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}