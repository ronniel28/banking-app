import React from 'react';

export default function MyAccountCard(props){

    function handleDeleteButton(){
        props.deleteMyAccount(props.id)
    }

    return(
        <div className="card-content-profil pt-3 flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <div className="avatar h-10 w-10 rounded-full border-4 border-opacity-40 bg-white flex justify-center items-center" >
          <i class="fas fa-id-card"></i> 
          </div>
      
          <div className="card-name-user text-xs">
            <h2 className="font-bold">{props.accountName}</h2>
            <div className=" flex items-center gap-x-1">
            <h3 className="font-semibold">{props.accountNumber}</h3>
            </div>
          </div>
        </div>
        <h1>{props.initialAmount}</h1>
        <div className="flex justify-evenly">
        <div className="card-action">
           <button className="flex items-center px-2 py-1 text-xs text-white bg-green-500 hover:bg-green-600">
           <i class="fas fa-user-edit"></i>
            <span className=""> Edit</span>
          </button>
        </div>
        <div className="card-action">
           <button
           onClick={handleDeleteButton}
            className="flex items-center px-2 py-1 text-xs text-white bg-red-900 hover:bg-red-500">
                  <i class="fas fa-trash-alt"></i>
            <span className="">Delete</span>
          </button>
          </div>
        </div>
      </div>
    )
}