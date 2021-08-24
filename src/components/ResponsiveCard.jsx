
import React from 'react';
import DepositModal from './DepositModal';
import ExpensesModal from './ExpensesModal';
import TransferMoneyModal from './TransferMoneyModal';
import WithdrawModal from './WithdrawModal';

function ResponsiveCard(props){
   return (<section className="container px-6 py-4 mx-auto justify-center items-center">
  <div className="grid gap-6 mb-8 md:grid-cols-2 md:grid-rows-2">
  {/* card1 */}
  
     <ExpensesModal />
   
{/* card2 */}
   <TransferMoneyModal
   addToTimeStamps={props.addToTimeStamps}
   addToTransaction={props.addToTransaction}
   toWithdraw={props.toWithdraw}
   toDeposit={props.toDeposit}
   toTransfer={props.toTransfer}
   contacts={props.contacts}
   myAccounts={props.myAccounts} />
   {/* card3 */}
   <DepositModal
   addToTimeStamps={props.addToTimeStamps}
   addToTransaction={props.addToTransaction}
   findSelectedAccount={props.findSelectedAccount}
   toDeposit={props.toDeposit}
   myAccounts={props.myAccounts} />
    {/* <!-- Card 4 --> */}

    <WithdrawModal
    addToTimeStamps={props.addToTimeStamps}
    addToTransaction={props.addToTransaction}
    toWithdraw={props.toWithdraw}
    myAccounts ={props.myAccounts}/>
  </div>

</section>)
}

export default ResponsiveCard;