import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Friends from './Friends';
import SettingsPage from './SettingsPage';
import TransactionHistory from './TransactionHistory';

function MainContent(props){
  const [transactions, setTransactions] =useState([]);

    function addToTransaction(transaction){
        setTransactions(prevValue=>{
            return[...prevValue,transaction]
        })
    }

    return(
<div >
    <Sidebar 
    setMessege ={props.setMessege}
    logOut={props.logOut}

    />
    <Dashboard
    addToTransaction={addToTransaction}
    toTransfer={props.toTransfer}
    findSelectedAccount={props.findSelectedAccount}
    toWithdraw={props.toWithdraw}
    toDeposit={props.toDeposit}
    myAccounts={props.myAccounts}
    contacts ={props.contacts}
    accountDetail={props.accountDetail} />
    <Friends 
        toDeleteContact={props.toDeleteContact}
        contacts={props.contacts}
        addContact={props.addContact}
    />

    <TransactionHistory
    transactions={transactions} />
    
    <SettingsPage 
    addMyAccount={props.addMyAccount}
    deleteMyAccount={props.deleteMyAccount}
    myAccounts={props.myAccounts}
    />
    
</div>)
}
    

export default MainContent;