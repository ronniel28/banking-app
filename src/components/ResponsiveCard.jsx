
import React from 'react';
import DepositModal from './DepositModal';
import ExpensesModal from './ExpensesModal';
import TransferMoneyModal from './TransferMoneyModal';
import WithdrawModal from './WithdrawModal';

function ResponsiveCard(){
   return (<section className="container px-6 py-4 mx-auto justify-center items-center">
  <div className="grid gap-6 mb-8 md:grid-cols-2 md:grid-rows-2">
  {/* card1 */}
  
     <ExpensesModal />
   
{/* card2 */}
   <TransferMoneyModal />
   {/* card3 */}
   <DepositModal />
    {/* <!-- Card 4 --> */}

    <WithdrawModal />
  </div>

</section>)
}

export default ResponsiveCard;