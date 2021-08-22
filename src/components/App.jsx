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
    const[isLoggedIn, setIsLoggedIn]= useState(true);
    const [contacts, setContacts]= useState([{
        accountType:"contacts",
        accountName: "Contact 1",
        accountNumber: 4,
        initialAmount: 100000},
        {
        accountType:"contacts",
        accountName:"Contact 2",
        accountNumber:5,
        initialAmount:200000
        },
        {
        accountType:"contacts",
        accountName:"Contact 3",
        accountNumber:6,
        initialAmount:200000
        }]) //for contacts array


    const [myAccounts, setMyAccounts] =useState([
        {
        accountType:"ownAccount",
        accountName: "John Doe",
        accountNumber: 1,
        initialAmount: 100000},
        {
        accountType:"ownAccount",
        accountName:"Ronniel",
        accountNumber:2,
        initialAmount:200000
        },
        {
        accountType:"ownAccount",
        accountName:"Ewan",
        accountNumber:3,
        initialAmount:200000
        }
    ]) //my accounts
    
console.log(setMyAccounts)
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
        const depositAmount= depositInput.depositAmount;
        const accountId= depositInput.selectedAccountId;

        console.log(accountId);
        setMyAccounts(myAccounts.map(prevValue=>{
            console.log(prevValue)
            if(prevValue.accountNumber !== accountId) return prevValue
            return{...prevValue, initialAmount: (depositAmount + prevValue.initialAmount)}
           
        }))
       
    }

    //withdraw
    function toWithdraw(withdrawInput){
        const withdrawAmount= withdrawInput.withdrawAmount;
        const accountId= withdrawInput.selectedAccountId;

        setMyAccounts(myAccounts.map(prevValue=>{
            if(prevValue.accountNumber !== accountId) return prevValue
            return{...prevValue, initialAmount: (prevValue.initialAmount - withdrawAmount )}
           
        }))
       
    }

    //transfer money

    function toTransfer(transferInput){
        const transferFromAccountId = transferInput.transferFromAccountId;
        const transferAmount = transferInput.transferAmount;
        setMyAccounts(myAccounts.map(prevValue=>{
            if(prevValue.accountNumber !== transferFromAccountId) return prevValue
            return {...prevValue, initialAmount:(prevValue.initialamount - transferAmount)}
        }))
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