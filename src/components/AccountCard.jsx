import React from 'react';


function AccountCard(props){
    return(
    
        <div className="w-72 p-3 bg-gradient-to-r from-gray-600 to-black rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-100 pb-4">{props.accountDetail.initialAmount}</h1> <span className="text-xs text-gray-200 shadow-2xl">{props.accountDetail.accountName}</span>
            <div className="flex justify-between items-center pt-4">
                <div className="flex flex-col"> <span className="text-xs text-gray-300 font-bold">{props.accountDetail.accountNumber}</span> <span className="text-xs text-gray-300 font-bold">09/10</span> </div> <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />
            </div>
        </div>
    
    
    )
}

export default AccountCard;