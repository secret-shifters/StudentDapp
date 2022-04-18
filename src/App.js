import React,{ useRef, useEffect, useState } from "react";
import './App.css';
import Web3 from 'web3';
import LoginForm from "../src/components/Login";
import SignUPStudent from "./components/Login/loginform";
function App() {
  const provider= "http://localhost:7545";
  const [userContract,setUserContract] = useState();
  const [fileContract,setFileContract] = useState();
  const [schoolContract,setSchoolContract] = useState();
 
  const web3 = new Web3(provider);
  const [web3objectDetails,setWeb3Object] = useState({
    web3Account : "",
    web3AccountNetworkId: ""
  });

  useEffect(() =>  {
    
    let provider=window.ethereum;

    if(typeof provider!=='undefined'){
      provider.request({method:'eth_requestAccounts'})
      .then((accounts)=>{console.log(accounts)})
      .catch((err)=>{
        console.log(err);

      
    });
    }else{
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!'); 
    }
    // loadWeb3 ();
    },[]); 
    

  return (
    <div className="App">
         <LoginForm accountObject={web3objectDetails} web3Object ={web3} schoolContract={schoolContract}/>
    </div>
  );
}

export default App;
