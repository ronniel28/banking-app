import React, {useState} from 'react';
import AddAccount from './AddAccount';
import Heading from './Heading';
import MyAccountsTable from './MyAccountsTable';

function SettingsPage(props){
    return(<div id="settings" className="ml-64 bg-gradient-to-r from-blue-300 to-blue-700 h-screen">
        <Heading name="Settings" />
        <div className="flex justify-evenly items-center h-full w-full">
       <div className=" w-2/6 h-3/5">
           <AddAccount
           addMyAccount ={props.addMyAccount} />
       </div>
        <div className="h-4/5 w-3/6">
        <MyAccountsTable
        deleteMyAccount={props.deleteMyAccount} 
        myAccounts={props.myAccounts} 
        />
        </div>
        </div>
    </div>)
}

export default SettingsPage;