import React from 'react';


function AccountCard(){
    return(
    
        <div className="w-72 p-3 bg-gradient-to-r from-gray-600 to-black rounded-lg">
            <h1 className="text-3xl font-semibold text-gray-100 pb-4">₱ 100,000</h1> <span class="text-xs text-gray-200 shadow-2xl">John Snow</span>
            <div className="flex justify-between items-center pt-4">
                <div className="flex flex-col"> <span className="text-xs text-gray-300 font-bold">1234 4567 8901 2345</span> <span class="text-xs text-gray-300 font-bold">09/10</span> </div> <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />
            </div>
        </div>
    
    
    )
}

export default AccountCard;