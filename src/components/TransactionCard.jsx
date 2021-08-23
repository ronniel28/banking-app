import React,{useState} from 'react';
import DepositTransactionCard from './DepositTransactionCard';
import TransferTransactionCard from './TransferTransactionCard';
import WithdrawTransactionCard from './WithdrawTransactionCard';


export default function TransactionCard(props){
const transactions = props.transactions;
return(
    transactions.map(transaction=>{
    if(transaction.transactionType==="withdraw"){
        return <WithdrawTransactionCard />
    }else if(transaction.transactionType==="deposit"){
        return <DepositTransactionCard />
    }else if(transaction.transactionType==="transfer"){
        return <TransferTransactionCard />
    }
}))

    
}