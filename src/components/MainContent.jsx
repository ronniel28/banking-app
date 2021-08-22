import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Friends from './Friends';
import SettingsPage from './SettingsPage';

function MainContent(props){
    return(
<div >
    <Sidebar 
    setMessege ={props.setMessege}
    logOut={props.logOut}

    />
    <Dashboard
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

    <SettingsPage 
    addMyAccount={props.addMyAccount}
    deleteMyAccount={props.deleteMyAccount}
    myAccounts={props.myAccounts}
    />
    
</div>)
}
    

export default MainContent;