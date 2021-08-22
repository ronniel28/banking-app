import React from 'react';

function BankAccountOption(props){

    function handleClick(){
        props.addSelectedAccountId(props);
    }
return(<option onClick={handleClick}>{props.accountName} {props.accountNumber}</option>)
}

export default BankAccountOption;