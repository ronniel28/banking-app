import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Friends from './Friends';

function MainContent(){
    return(
<div >
    <Sidebar />
    <Dashboard />
    <Friends />
    
</div>)
}
    

export default MainContent;