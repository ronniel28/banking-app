import React from 'react';

export default function ExpenceCard(props){

    function handleClick(){
        props.toDelete(props.id);
    }

    return(
        <div className="card-content-profil flex justify-between items-center">
        <div className=" flex gap-x-2 items-center">
          <div className="avatar h-10 w-10 rounded-full border-4 border-opacity-40">
          <i className="fas fa-cart-plus"></i></div>
          <div className="card-name-user text-xs">
            <div className="font-bold text-base">{props.itemName}</div>
          </div>
        </div>

        <h6 className="font-bold">{props.itemPrice}</h6>

        <div className="card-action">
          <button 
          onClick={handleClick} 
          className="flex items-center px-2 py-1 text-xs text-white bg-red-500 hover:bg-red-600">
          <i className="fas fa-trash-alt"></i>
            <span className="">Delete</span>
          </button>
        </div>
      </div>
    )
}