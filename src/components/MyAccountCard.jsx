import React from 'react';
import LargeModal from './LargeModal';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
export default function MyAccountCard(props){

    function handleDeleteButton(){
        props.deleteMyAccount(props.id)
    }

    return(
        <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <div className="avatar h-10 w-10 rounded-full border-4 border-opacity-40 bg-white flex justify-center items-center" >
          <i className="fas fa-id-card"></i> 
          </div>
      
          <div className="card-name-user text-xs">
            <h2 className="font-bold">{props.accountName}</h2>
            <div className=" flex items-center gap-x-1">
            <h3 className="font-semibold">{props.accountNumber}</h3>
            </div>
          </div>
        </div>
        <h1>{props.initialAmount}</h1>
        <div className="flex justify-evenly">
        <div className="card-action">
        <LargeModal />
           {/* <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600"> */}
           {/* <i className="fas fa-user-edit"></i>
            <span className=""> Edit</span> */}
          {/* </button> */}
        </div>
        <div className="card-action">
        <Button
        onClick={handleDeleteButton}
            color="red"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
        >
        <i className="fas fa-trash-alt"></i>
            Delete
        </Button>
           {/* <button
           onClick={handleDeleteButton}
            className="flex items-center px-2 py-1 text-xs text-white bg-red-900 hover:bg-red-500">
                  <i className="fas fa-trash-alt"></i>
            <span className="">Delete</span>
          </button> */}
          </div>
        </div>
      </div>
    )
}