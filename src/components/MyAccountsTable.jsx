import React from 'react';
import ContactCard from './ContactCard';
import MyAccountCard from './MyAccountCard';

export default function MyAccountsTable(props){
    const accountMap = props.myAccounts;
return(

  <div className="w-full h-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
    <div className="header-card flex justify-between font-semibold">
      <div className="">Account List</div>
      <div className="flex items-center gap-x-1 text-sm text-blue-500">
         <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      <span>See all</span>
      </div>
    </div>
    

    <div className="card-content divide-y flex flex-col gap-y-3 mt-5">

     {accountMap.map((account,index)=>{
         return<MyAccountCard
         key={index}
         id={index}
         editMyAccount={props.editMyAccount}
         account={account}
         deleteMyAccount ={props.deleteMyAccount}
         accountFullName ={account.accountFullName}
         accountEmail={account.accountEmail}
         accountName ={account.accountName}
         accountNumber={account.accountNumber}
         initialAmount={account.initialAmount} />
     })}

    </div>

  </div>





)
}