import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "./Input";
import ExpensesButton from "./ExpensesButton";
import ExpensesTable from "./ExpensesTable";


export default function ExpensesModal() {
    const [showModal, setShowModal] = React.useState(false);
    const [expenseItem, setExpenseItem]=useState({
        itemName:"",
        itemPrice:""
    })

    const [items, setItems] = useState([]);

    function handleInput(passedEvent){
        const {name, value}= passedEvent.target;
        setExpenseItem(prevValue=>{
            return {...prevValue,
            [name]:value}
        })

    }

    function hadleAddButton(){
        setItems(prevItems =>{
            return [...prevItems,expenseItem]
            
        })
        setExpenseItem({
            itemName:"",
            itemPrice:""
        })
    }

    function deleteFunction(id){
        setItems(prevValue=>{
            return prevValue.filter((item, index)=>{
                return index !==id
            })
        })
    }

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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                </div>
                <div>
                 <p className="mb-2 text-sm font-medium text-gray-900">Expenses</p>
                 </div>
            </Button>

            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>

                <ModalHeader toggler={() => setShowModal(false)}>
                    Expenses
                </ModalHeader>

                <ModalBody>
               
               {/* input form  */}

         <div className="flex flex-col justify-center items-center">
             <Input
                value={expenseItem.itemName}
                onChange={handleInput}
                name="itemName"
                placeholder="Input Item"
                type="text" />

            <Input
                value={expenseItem.itemPrice} 
                onChange={handleInput}
                name ="itemPrice"
                placeholder="Input Price"
                type="number" />

             <ExpensesButton 
                 toAdd={hadleAddButton}
             />
        </div>

        <div className="bg-gray-300 rounded-md my-8">
            <ExpensesTable 
                toDelete={deleteFunction}
                items={items}
            />
        </div>
        
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