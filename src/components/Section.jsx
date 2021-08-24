import React from 'react';
import AccountCard from './AccountCard';
import ResponsiveCard from './ResponsiveCard';

function Section(props){
    return(
        <section className=" lg:h-4/5 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:w-full  lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2">
                <div className="flex justify-center h-64  bg-cover lg:rounded-lg lg:h-full items-center">
                <AccountCard 
                    accountDetail={props.accountDetail}
                /></div>
            </div>

            <div className="flex justiy-center items-center bg-white lg:w-2/4 px-6 py-12 bg-cover h-64 lg:h-full lg:rounded-lg">
            <ResponsiveCard
            addToTimeStamps={props.addToTimeStamps}
            addToTransaction={props.addToTransaction}
            toTransfer={props.toTransfer}
            findSelectedAccount={props.findSelectedAccount}
            toWithdraw={props.toWithdraw}
            toDeposit={props.toDeposit}
            contacts={props.contacts}
            myAccounts={props.myAccounts} />
                
            </div>
        </div>
   </section>
   )
}

export default Section;