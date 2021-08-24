import React from 'react';


function AccountCard(props){
    return(
    
        <div className="my-4 w-72 p-3 bg-gradient-to-r from-gray-600 to-black rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-100 pb-4">{props.initialAmount}</h1> <span className="text-xs text-gray-200 shadow-2xl">{props.accountName}</span>
            <div className="flex justify-between items-center pt-4">
                <div className="flex flex-col"> <span className="text-xs text-gray-300 font-bold">{props.accountNumber}</span> <span className="text-xs text-gray-300 font-bold">09/10</span> </div> <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />
            </div>
        </div>
    
    
    )
}

export default AccountCard;