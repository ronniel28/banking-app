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
    const [contacts, setContacts]= useState([]) //for contacts array
    const [myAccounts, setMyAccounts] =useState([]) //my accounts

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

    //contacts
    function addContact(contact){
        setContacts(prevContacts=>{
            return [...prevContacts, contact]
        })
    }
    
    function toDeleteContact(id){
        setContacts(prevContacts=>{
            return prevContacts.filter((contact, index)=>{
                return index !==id
            })
        })
    }

    //my accounts
    function addMyAccount(account){
        setMyAccounts(prevContacts=>{
            return [...prevContacts, account]
        })
    }
    
    function deleteMyAccount(id){
        setMyAccounts(prevContacts=>{
            return prevContacts.filter((account, index)=>{
                return index !==id
            })
        })
    }

return(isLoggedIn?
<MainContent
addMyAccount={addMyAccount}
deleteMyAccount={deleteMyAccount}
myAccounts={myAccounts}
toDeleteContact={toDeleteContact}
contacts ={contacts}
addContact={addContact}
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