import React from 'react';

function BankAccountOptionThree(props){

    function handleClick(){
        console.log(props.accountNumber)
        console.log(props.accountType)
       props.addToTransferInfo({
           toAccountNumber:props.accountNumber,
           accountType: props.accountType
       })
    }
return(<option>{props.accountName} {props.accountNumber}</option>)
}

export default BankAccountOptionThree;