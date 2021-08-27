import React from 'react';

function BankAccountOption(props){

    function handleClick(){
        props.addToTransferInfo({
            fromAccountNumber: props.accountNumber,
            
        })
    }
return(<option onClick={handleClick}>{props.accountName} {props.accountNumber}</option>)
}

export default BankAccountOption;