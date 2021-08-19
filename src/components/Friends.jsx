import React from "react";
import AddFriend from "./AddFriend";
import FriendCard from "./FriendCard";
import Heading from "./Heading";

export default function Friends(){
return(
    <div id ="friends" className="ml-64 bg-gradient-to-r from-blue-300 to-blue-500 h-screen">
        <Heading 
        name="Friends" />
        <div className="flex justify-evenly items-center bg-blue-600 h-full w-full">
       <div className="bg-green-500 w-2/6 h-3/5">
           <AddFriend />
       </div>
        <div className="bg-red-500 h-4/5 w-3/6"></div>
        </div>
        
    </div>
)
}