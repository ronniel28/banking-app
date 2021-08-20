import React, {useState} from 'react';
import Login from './Login';
import MainContent from './MainContent';

const logInCredential ={
    username:"avionschool",
    password:"12345"
}

const myAccountDetail ={
    accountName: "John Doe",
    accountNumber: 1234567,
    initialAmount: 100000
}


function App(){
    const[logInMessege, setLogInMessege] = useState("Welcome!")
    const[isLoggedIn, setIsLoggedIn]= useState(false);

    function checkCredential(credential){
        if((logInCredential.username === credential.username)&&(logInCredential.password === credential.password)){
            setIsLoggedIn(true);
        }else{
            setLogInMessege("User Doesn't Exists")
        }
    }

    function logOut(){
        setIsLoggedIn(false);
    }

    function setMessege(messege){
        setLogInMessege(messege)
    }

return(isLoggedIn?
<MainContent
setMessege={setMessege}
logOut = {logOut}
accountDetail={myAccountDetail} />
:
<Login
messege ={logInMessege}
login={checkCredential} />
 )
}

export default App;