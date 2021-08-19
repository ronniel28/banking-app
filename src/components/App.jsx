import React, {useState} from 'react';
import Login from './Login';
import MainContent from './MainContent';

const logInCredential ={
    username:"avionschool",
    password:"12345"
}


function App(){
    const[logInMessege, setLogInMessege] = useState("Welcome!")
    const[isLoggedIn, setIsLoggedIn]= useState(true);

    function checkCredential(credential){
        if((logInCredential.username === credential.username)&&(logInCredential.password === credential.password)){
            setIsLoggedIn(true);
        }else{
            setLogInMessege("User Doesn't Exists")
        }
    }

return(isLoggedIn?
<MainContent />
:
<Login
messege ={logInMessege}
login={checkCredential} />
 )
}

export default App;