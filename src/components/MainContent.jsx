import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Friends from './Friends';

function MainContent(props){
    return(
<div >
    <Sidebar 
    logOut={props.logOut}

    />
    <Dashboard
    accountDetail={props.accountDetail} />
    <Friends />
    
</div>)
}
    

export default MainContent;