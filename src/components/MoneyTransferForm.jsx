
import React,{useEffect, useState} from 'react';
import AlertNotif from './AlertNotif';
import BankAccountOptionTwo from './BackAccountOptionTwo';
import BankAccountOption from './BankAccountOption';
import SuccessNotif from './SuccessNotif';


export default function MoneyTransferForm(props){
    const [notif, setNotif]=useState("");
    const contactsToMap = props.contacts;
    const myAccountsToMap= props.myAccounts; 
    const [accountToMap, setAccountToMap]= useState([]);
    const [transferInfo,setTransferInfo]= useState({
        fromInitialAmount:"",
        fromAccount:"",
        accountType:"",
        toAccount:"",
        amount:"",
        note:"",
        fromAccountId:"",
        toAccountId:""
    })

        useEffect(()=>{
           
        },[accountToMap])

        function handleChange(event){
            const {name,value}= event.target;
            if(name === "amount"){
                setTransferInfo(prevInfo=>{
                    return{...prevInfo,
                    [name]:parseInt(value)}
                })
            }else{
                setTransferInfo(prevInfo=>{
                    return{...prevInfo,
                    [name]:value}
                })
            }
        }
        function addFromInitialAmount(account){
            setTransferInfo(prevValue=>{
                return{...prevValue,
                fromInitialAmount:account.fromInitialAmount}
            })
        }
        function addSelectedAccountId(account){
            const {name, accountNumber, accountType}= account;
            console.log(account)
            setTransferInfo(prevValue=>{
                return{...prevValue,
                    [name]:parseInt(accountNumber)
                }
            })

        }

        function handleClick(event){
            event.preventDefault()
        
            if(transferInfo.fromInitialAmount < transferInfo.amount){
                setNotif(<AlertNotif 
                    messege="Can't transfer amount exceeding your current balance"
                />)
            }else{
                props.toDeposit(transferInfo)
                props.toWithdraw(transferInfo)
                // props.toTransfer(transferInfo);
                setTransferInfo({
                    fromAccount:"",
                    accountType:"",
                    toAccount:"",
                    amount:"",
                    note:"",
                    fromAccountId:"",
                    toAccountId:""
                })
                setNotif(<SuccessNotif
                messege="Successfully Transfered" />)
            }


        }


    return(
        <div className="bg-gray-200 h-full pt-2 font-sans">
            <div className="container">
            <div>{notif}</div>
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-gray-900">Select Account</h2>
                    <form className="mt-6 border-t border-gray-400 pt-4">
                        <div className='flex flex-wrap -mx-3 mb-6'>
                               {/* transfer from */}
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Transfer from</label>
                                <div className="flex-shrink w-full inline-block relative">
                                    <select 
                                        value={transferInfo.fromAccount}
                                        name="fromAccount"
                                        onChange={handleChange}
                                        className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                       <option>choose ...</option>
                                      { myAccountsToMap.map(myAccount=>{
                                          return <BankAccountOption
                                                    fromInitialAmount={myAccount.initialAmount}
                                                    addFromInitialAmount={addFromInitialAmount}
                                                    name="fromAccountId"
                                                    addSelectedAccountId={addSelectedAccountId}
                                                    accountName={myAccount.accountName}
                                                    accountNumber={myAccount.accountNumber}
                                                    />
                                      })}
                                    </select>
                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                                    {/* type of account to transfer to */}
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Transfer to own account or contacts</label>
                                <div className="flex-shrink w-full inline-block relative">
                                    <select 
                                    value={transferInfo.accountType}
                                        name="accountType"
                                        onChange={handleChange}
                                        className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                       <option>choose ...</option>
                                       <option onClick={()=>setAccountToMap(myAccountsToMap)}>Own Account</option>
                                       <option onClick={()=>setAccountToMap(contactsToMap)}>Contacts</option>
                                        
                                    </select>
                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                                    {/* transfer to */}
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Transfer to</label>
                                <div className="flex-shrink w-full inline-block relative">
                                    <select 
                                        value={transferInfo.toAccount}
                                        name="toAccount"
                                        onChange={handleChange}
                                        className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                       <option>choose ...</option>
                                     { accountToMap.map(account=>{
                                          return <BankAccountOptionTwo
                                                    name="toAccountId"
                                                    addSelectedAccountId={addSelectedAccountId}
                                                    accountType={account.accountType}
                                                    accountName={account.accountName}
                                                    accountNumber={account.accountNumber}
                                                    />
                                      })}  
                                    </select>
                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            {/* amount */}
                            <div className="personal w-full border-t border-gray-400 pt-4">
                                <h2 className="text-2xl text-gray-900">Amount detail:</h2>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Amount</label>
                                        <input 
                                        value={transferInfo.amount}
                                        onChange={handleChange}
                                        name="amount"
                                        className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number'  required/>
                                    </div>
                                </div>

                                {/* note */}
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Note</label>
                                    <textarea
                                    value={transferInfo.note}
                                    onChange={handleChange}
                                    name="note"
                                     placeholder="Note(Optional)" 
                                     className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' ></textarea>
                                </div>
                                <div className="flex justify-end">
                                <div className="flex justify-end">
                                    <button 
                                    onClick={handleClick}
                                    className="appearance-none bg-green-200 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" 
                                    type="submit">Transfer Money</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}