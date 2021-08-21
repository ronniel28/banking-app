import React, { useState } from "react";
import AddFriend from "./AddFriend";
import FriendsTable from "./FriendsTable";
import Heading from "./Heading";

export default function Friends(props){


return(
    <div id ="friends" className="ml-64 bg-gradient-to-r from-blue-300 to-blue-700 h-screen">
        <Heading 
        name="Contacts" />
        <div className="flex justify-evenly items-center h-full w-full">
       <div className=" w-2/6 h-3/5">
           <AddFriend
           
           addContact={props.addContact} />
       </div>
        <div className="h-4/5 w-3/6">
        <FriendsTable 
        toDeleteContact={props.toDeleteContact} 
        contacts={props.contacts} />
        </div>
        </div>
        
    </div>
)
}