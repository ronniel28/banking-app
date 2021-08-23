import React,{useState} from 'react';

export default function WithdrawTransactionCard(){
    return(
        <div className="bg-gray-100 mx-auto border-gray-500 border rounded-sm text-gray-700 mb-0.5 h-30">
         <div className="flex p-3 border-l-8 border-red-600">
            <div className="space-y-1 border-r-2 pr-3">
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500"> Release #</span> LTC08762304</div>
               <div className="text-sm leading-5 font-semibold"><span className="text-xs leading-4 font-normal text-gray-500 pr"> BOL #</span> 10937</div>
               <div className="text-sm leading-5 font-semibold">JUN 14. 9:30 PM</div>
            </div>
            <div className="flex-1">
               <div className="h-full flex flex-col justify-center  ml-3 space-y-1 border-r-2 pr-3">
                  {/* <div className="text-base leading-6 font-normal">KROGER MEMPHIS</div> */}
                  <div className="text-lg leading-4 font-normal"><span className="text-xs leading-4 font-normal text-gray-500"> From</span> John Doe - 121345</div>
                
                  
               </div>
            </div>
            <div className="border-r-2 pr-3">
               <div >
                  <div className="ml-3 my-3 border-gray-200 border-2 bg-gray-300 p-1">
                     <div className="uppercase text-xs leading-4 font-medium">Php</div>
                     <div className="text-center text-sm leading-4 font-semibold text-gray-800">20000</div>
                  </div>
               </div>
            </div>
            <div>
               <div className="ml-3 my-5 bg-red-600 p-1 w-20">
                  <div className="uppercase text-xs leading-4 font-semibold text-center text-yellow-100">Withdraw</div>
               </div>
            </div>
            <div>
            </div>
         </div>
      </div>
    )
}