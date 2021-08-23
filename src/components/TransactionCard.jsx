import React,{useState} from 'react';
import DepositTransactionCard from './DepositTransactionCard';
import TransferTransactionCard from './TransferTransactionCard';
import WithdrawTransactionCard from './WithdrawTransactionCard';


export default function TransactionCard(props){
const transactions = props.transactions;
return(
    transactions.map(transaction=>{
    if(transaction.transactionType==="withdraw"){
        console.log(transaction.fromAccount)
        return <WithdrawTransactionCard
        fromAccount={transaction.fromAccount}
        amount={transaction.amount}
        transaction={transaction} />
    }else if(transaction.transactionType==="deposit"){
        return <DepositTransactionCard
        toAccount={transaction.toAccount}
        amount={transaction.amount}
        transaction={transaction} />
    }else if(transaction.transactionType==="transfer"){
        return <TransferTransactionCard
        amount={transaction.amount}
        fromAccount={transaction.fromAccount}
        toAccount={transaction.toAccount}
        transaction={transaction} />
    }
}))

    
}