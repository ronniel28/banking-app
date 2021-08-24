import React,{useState} from 'react';

export default function NewlogIn (props){

    const [credential, setCredential]= useState({
        username:"",
        password:""
    });

    function handleChange(event){
        const{name, value}=event.target;

        setCredential(prevValue=>{
            return{...prevValue,
            [name]:value}
        })
    }

    function submit(){
        props.login(credential)
    }

    return(
        <div className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage:` url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80")`}}><div className="absolute bg-gradient-to-b from-blue-500 to-blue-400 opacity-75 inset-0 z-0"></div>
  <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
        <div className="self-start hidden lg:flex flex-col  text-white">
          <img src="" className="mb-3" />
          <h1 className="mb-3 font-bold text-5xl">{props.messege} </h1>
          <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups</p>
        </div>
      </div>
      <div className="flex justify-center self-center  z-10">
        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Log In </h3>
              <p className="text-gray-500">Please log in to your account.</p>
            </div>
            <div className="space-y-5">
                        <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700 tracking-wide">Username</label>
              <input
              value={credential.username}
                    name="username"
                    onChange={handleChange}
               className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="text" placeholder="Username" />
              </div>
                          <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
              value={credential.password}
                    name="password"
                    onChange={handleChange}
               className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400" type="password" placeholder="Enter your password" />
            </div>
              <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                <label for="remember_me" className="ml-2 block text-sm text-gray-800">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button 
              onClick ={submit}
                    color="lightBlue"
              type="submit" className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Log in
              </button>
            </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2021-2022
                <a href="https://https://github.com/ronniel28" rel="" target="_blank" title="ronniel github" className="text-blue hover:text-blue-500 ">RONNIEL</a></span>
            </div>
        </div>
      </div>
  </div>
</div>
    )
}