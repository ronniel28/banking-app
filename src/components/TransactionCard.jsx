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
        now={transaction.now}
        fromAccount={transaction.fromAccount}
        amount={transaction.amount}
        transaction={transaction} />
    }else if(transaction.transactionType==="deposit"){
        return <DepositTransactionCard
        now={transaction.now}
        toAccount={transaction.toAccount}
        amount={transaction.amount}
        transaction={transaction} />
    }else if(transaction.transactionType==="transfer"){
        return <TransferTransactionCard
        now={transaction.now}
        amount={transaction.amount}
        fromAccount={transaction.fromAccount}
        toAccount={transaction.toAccount}
        transaction={transaction} />
    }
}))

    
}