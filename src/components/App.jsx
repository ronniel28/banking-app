import React, {useState} from 'react';
import Login from './Login';
import MainContent from './MainContent';

const logInCredential ={
    key:7,
    username:"avionschool",
    password:"12345"
}

const myAccountDetail ={
    key:8,
    accountName: "John Doe",
    accountNumber: 1234567,
    initialAmount: 100000
}


function App(){
    const[logInMessege, setLogInMessege] = useState("Welcome!")
    const[isLoggedIn, setIsLoggedIn]= useState(true);
    const [contacts, setContacts]= useState([{
        key:4,
        accountType:"contacts",
        accountName: "Contact 1",
        accountNumber: 4,
        initialAmount: 100000},
        {
            key:5,
        accountType:"contacts",
        accountName:"Contact 2",
        accountNumber:5,
        initialAmount:200000
        },
        {
            key:6,
        accountType:"contacts",
        accountName:"Contact 3",
        accountNumber:6,
        initialAmount:200000
        }]) //for contacts array


    const [myAccounts, setMyAccounts] =useState([
        {
            key:1,
        accountType:"ownAccount",
        accountName: "John Doe",
        accountNumber: 1,
        initialAmount: 100000},
        {
            key:2,
        accountType:"ownAccount",
        accountName:"Ronniel",
        accountNumber:2,
        initialAmount:200000
        },
        {
            key:3,
        accountType:"ownAccount",
        accountName:"Ewan",
        accountNumber:3,
        initialAmount:200000
        }
    ]) //my accounts
    
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
        console.log(myAccounts)
    }
    
    function deleteMyAccount(id){
        setMyAccounts(prevContacts=>{
            return prevContacts.filter((account, index)=>{
                return index !==id
            })
        })
    }

    //deposit 
    function findSelectedAccount(id){
       console.log(myAccounts[id].initialAmount);
    }

    function toDeposit(depositInput){
        const amount= depositInput.amount;
        const accountId= depositInput.toAccountId;

        if(depositInput.accountType==="Contacts"){
            setContacts(contacts.map(prevValue=>{
                if(prevValue.accountNumber !== accountId) return prevValue
                return{...prevValue, initialAmount:(prevValue.initialAmount + amount)}
            }))
        }else{
            setMyAccounts(myAccounts.map(prevValue=>{
                if(prevValue.accountNumber !== accountId) return prevValue
                return{...prevValue,initialAmount:(prevValue.initialAmount + amount)}
            }))
        }
       
    }

    //withdraw
    function toWithdraw(withdrawInput){
        const amount= withdrawInput.amount;
        const accountId= withdrawInput.fromAccountId;

        setMyAccounts(myAccounts.map(prevValue=>{
            if(prevValue.accountNumber !== accountId) return prevValue
            return{...prevValue, initialAmount: (prevValue.initialAmount - amount )}
           
        }))
       
    }

    

    //transfer money

    function toTransfer(transferInput){
        const transferFromAccountId = transferInput.transferFromAccountId;
        const transferAmount = transferInput.transferAmount;
        const transferToAccountId= transferInput.transferToAccountId

       
        if(transferInput.transferAccountType==="Contacts"){
            setContacts(contacts.map(prevValue=>{
                if(prevValue.accountNumber !== transferToAccountId) return prevValue
                return{...prevValue, initialAmount:(prevValue.initialAmount + transferAmount)}
            }))
        }else{
            setMyAccounts(myAccounts.map(prevValue=>{
                if(prevValue.accountNumber !== transferToAccountId) return prevValue
                return{...prevValue,initialAmount:(prevValue.initialAmount + transferAmount)}
            }))
        }
        
    }

return(isLoggedIn?
<MainContent
toTransfer={toTransfer}
toWithdraw={toWithdraw}
findSelectedAccount={findSelectedAccount}
toDeposit={toDeposit}
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