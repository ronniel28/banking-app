import React from 'react';

function BankAccountOptionTwo(props){

    function handleClick(){
        props.addSelectedAccountId(props);
        
    }
return(<option onClick={handleClick}>{props.accountName} {props.accountNumber}</option>)
}

export default BankAccountOptionTwo;