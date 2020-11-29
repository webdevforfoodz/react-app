import React, {useState, useEffect} from 'react';
import { updateWallet, getWaifuBalance, getWaifuStaked, getHaremEarned } from '../actions';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';


function Wallet() {

    useEffect(() => {
        connectWallet();
    },[]);

    const [wallet,setWallet] = useState('');
    const dispatch = useDispatch();

    //setting up contracts

    const waifuAddy = "0xB2279B6769CFBa691416F00609b16244c0cF4b20";
    const waifuABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"totalSupply","type":"uint256"},{"name":"feeReceiver","type":"address"},{"name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];
    // const univ2Addy = '';
    // const univ2ABI = '';
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(waifuABI,waifuAddy);
    
    const connectWallet = async () => {
        let ethereum = window.ethereum;
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var account = accounts[0];
        let shortAccount = ' ' + account.substring(0,3) + '...' + account.substring(39,42);
        setWallet(shortAccount);

        dispatch(updateWallet(account));
        // //getting balances
        let waifuBalance = Number((await contract.methods.balanceOf(account).call()/(10**18)).toFixed(2)).toLocaleString();

        let waifuStaked = Number((await contract.methods.balanceOf(account).call()/(10**18)).toFixed(2)).toLocaleString();

        let haremEarned = Number((await contract.methods.balanceOf(account).call()/(10**18)).toFixed(2)).toLocaleString();
        
        dispatch(getWaifuBalance([waifuBalance,waifuStaked,haremEarned]));

    }

    return(
        <div className="wallet" >
            <span>Wallet:{wallet}</span>
        </div>
    )
}

export default Wallet;