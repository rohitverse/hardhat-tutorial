const{expect}=require("chai");

describe("Token contract", function(){

    it("Deployment should assign the total supply of token to the owner", async function(){
        const [owner]= await ethers.getSigners();
        console.log("Signers object",owner);
        const Token = await ethers.getContractFactory("Token");//instance contract
        const hardhatToken = await Token.deploy();//deploy contarct
        const ownerBalance= await hardhatToken.balanceOf(owner.address);//owner balance=10000
        console.log("owner Address  :",owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance) ;//totalSupply=10000
    });
    it("Should transer token betweens accounts", async function(){
        const [owner,addr1,addr2]= await ethers.getSigners();
       const Token = await ethers.getContractFactory("Token");//instance contract
        const hardhatToken = await Token.deploy();//deploy contarct
       //Transfer 10 tokens from owner to addr1
       await hardhatToken.transfer(addr1.address,10);
       expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);
       await hardhatToken.connect(addr1).transfer(addr2.address,5);
       expect(await hardhatToken.balanceOf(addr2.address)).to.equal(5);
    });

})