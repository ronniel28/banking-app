import React from 'react';
import Heading from './Heading';
import Section from './Section';

function Dashboard(props){
return (<div id="dashboard" className="ml-64 bg-gradient-to-r from-blue-300 to-blue-700 h-screen">
<Heading
name ="Dashboard" />
<Section
accountDetail={props.accountDetail} />
</div>   )
}

export default Dashboard;