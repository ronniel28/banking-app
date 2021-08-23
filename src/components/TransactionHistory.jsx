import React from 'react';
import Heading from './Heading';
import TransactionCard from './TransactionCard';

export default function TransactionHistory(props){
    return(<div id="transaction-history" className="ml-64 bg-gradient-to-r from-blue-300 to-blue-700 h-screen">
        <Heading name="Transaction History" />
        <div className="container mx-auto bg-gray-50 min-h-screen p-8 antialiased">
   <div>
      
      <TransactionCard 
      transactions={props.transactions} />
     
   </div>
</div>
    </div>)
}