import React, {useState} from 'react';
import Login from './Login';
import MainContent from './MainContent';

const logInCredential ={
    username:"avionschool",
    password:"12345"
}

const myAccountDetail ={
    accountName: "Ronniel de Ramos",
    accountNumber: 1234567,
    initialAmount: 100000
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
<MainContent
accountDetail={myAccountDetail} />
:
<Login
messege ={logInMessege}
login={checkCredential} />
 )
}

export default App;