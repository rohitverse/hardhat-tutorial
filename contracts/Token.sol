// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.5.0 <0.9.0;

contract Token{
    string public name="Hardhat Token";
    string public symbol="HHT";
    uint public totalSupply=10000;

    address public owner;

    mapping(address=>uint) balances;

    constructor (){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }
    function transfer(address to, uint amount)external{
        require(balances[msg.sender]>=amount,"not Enough Tokens");
        balances[msg.sender]-=amount;
        balances[to]+=amount;
    }
    function balanceOf(address account)external view returns(uint){
        return balances[account];
    }
}