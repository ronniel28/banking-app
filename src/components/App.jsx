import React, {useState} from 'react';
import Login from './Login';
import MainContent from './MainContent';
import NewlogIn from './NewLogIn';

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
        accountType:"Contacts",
        accountName: "Contact 1",
        accountNumber: 869926248942,
        initialAmount: 100000},
        {

        accountType:"Contacts",
        accountName:"Contact 2",
        accountNumber:329171609334,
        initialAmount:200000
        },
        {
  
        accountType:"Contacts",
        accountName:"Contact 3",
        accountNumber:267770852452 ,
        initialAmount:200000
        }]) //for contacts array


    const [myAccounts, setMyAccounts] =useState([
        {
  
        accountType:"ownAccount",
        accountName: "John Doe",
        accountNumber: 344577052225,
        initialAmount: 100000},
        {

        accountType:"ownAccount",
        accountName:"Ronniel",
        accountNumber:331761914860 ,
        initialAmount:200000
        },
        {
   
        accountType:"ownAccount",
        accountName:"Savings Account 3",
        accountNumber:815466935577 ,
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

    function editMyAccount(id){
        
    }

    //deposit 
    function findSelectedAccount(id){
       console.log(myAccounts[id].initialAmount);
    }

    function toDeposit(depositInput){
        const amount= depositInput.amount;
        const accountId= depositInput.toAccountId;
        console.log(typeof depositInput.accountType)
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

            (transferInput.transferAccountType==="Contacts")?setContacts(contacts.map(prevValue=>{
                if(prevValue.accountNumber !== transferToAccountId) return prevValue
                return{...prevValue, initialAmount:(prevValue.initialAmount + transferAmount)}
            }))
            :
            setMyAccounts(myAccounts.map(prevValue=>{
                if(prevValue.accountNumber !== transferToAccountId) return prevValue
                return{...prevValue,initialAmount:(prevValue.initialAmount + transferAmount)}
            }))
       
        // if(transferInput.transferAccountType==="Contacts"){
            
        // }else{
            
        // }
        
    }

return(isLoggedIn?
<MainContent
editMyAccount={editMyAccount}
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


<NewlogIn
messege ={logInMessege}
login={checkCredential} />
 )
}

export default App;


