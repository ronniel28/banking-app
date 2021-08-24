
import React,{useState, useEffect} from 'react';
import BankAccountOptionTwo from './BackAccountOptionTwo';
import SuccessNotif from './SuccessNotif';


export default function DepositForm(props){
    
    const accountToMap = props.myAccounts;
    const [depositInput, setDepositInput]= useState({
        transactionType:"deposit",
        initialAmount:"",
        accountType:"",
        toAccountId:"",
        toAccount:"",
        amount:"",
        note:""
    })

    const[notif, setNotif]=useState("");

    function handleChange(event){
        const today= new Date();
        const {name, value}= event.target;
        if(name==="amount"){
            setDepositInput(prevInput=>{
                return{...prevInput,
                [name]:parseInt(value)}
            })
        }else{
            setDepositInput(prevInput=>{
                return{...prevInput,
                [name]:value}
               
            })
        }
        setDepositInput(prevInput=>{
            return {...prevInput,now:today}
            
        })
    }
    


    function addSelectedAccountId(id){
        setDepositInput(prevValue=>{
            return {...prevValue,
                toAccountId:id.accountNumber,
                initialAmount:id.initialAmount
            }
        })
    }

    
    function handleClick(event){
        props.toDeposit(depositInput);
        event.preventDefault();
        setDepositInput({
            transactionType:"deposit",
            accountType:"",
            toAccountId:"",
            toAccount:"",
            amount:"",
            note:""
        })
        setNotif(<SuccessNotif
            messege="Successfully deposited" />)
        props.addToTransaction(depositInput)
    }

    

    return(
        <div className="bg-gray-200 h-full pt-2 font-sans">
            <div className="container">
            <div>{notif}</div>
                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                    <h2 className="text-2xl text-gray-900">Select Account</h2>
                    <form className="mt-6 border-t border-gray-400 pt-4">
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Select which accout to deposit</label>
                                <div className="flex-shrink w-full inline-block relative">
                                    <select 
                                        value={depositInput.toAccount}
                                        name= "toAccount"
                                        onChange={handleChange}
                                        className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                       <option>choose ...</option>
                                        {accountToMap.map((account,index)=>{
                        
                                            return(
                                                <BankAccountOptionTwo
                                                key={index+4763}
                                                accounttype={props.accountType}
                                                addSelectedAccountId={addSelectedAccountId}
                                                findSelectedAccount={props.findSelectedAccount}
                                                accountName={account.accountName}
                                                accountNumber={account.accountNumber}
                                                initialAmount={account.initialAmount}
                                                 />)
                                        })}
                                    </select>
                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="personal w-full border-t border-gray-400 pt-4">
                                <h2 className="text-2xl text-gray-900">Amount detail:</h2>
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Amount</label>
                                        <input 
                                        value={depositInput.amount}
                                        onChange={handleChange}
                                        name="amount"
                                        className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='number'  required/>
                                    </div>
                                </div>
                                
                                <div className='w-full md:w-full px-3 mb-6'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Note</label>
                                    <textarea
                                    value={depositInput.note}
                                    onChange={handleChange}
                                    name="note"
                                     placeholder="Note(Optional)" 
                                     className='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                    onClick={handleClick}
                                    className="appearance-none bg-green-200 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" 
                                    type="submit">Deposit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}