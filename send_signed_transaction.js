const { ethers } = require("ethers");

const INFURA_ID = 'd0c4db9e7e0041c3bace607d958c5e1c'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '0x7C7945E06c7484530C090aDbF272150D05042161' //sender
const account2 = '0x60400954a427FDFf6f5594bD0b997CBEB51C26Dd' //recepient

const privateKey1 = 'eef881b2f30e51daa1848f65161984b725fbf4866d461f5380aa2909edc1cf1e' //sender'sPrivate Key
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {

    // Account 1 balance before transfer
    const SenderBalanceBefore = await provider.getBalance(account1)
    //Account 2 balance before transfer
    const RecieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nAccount 1 ETH balance Before Transaction: ${ethers.utils.formatEther(SenderBalanceBefore)}`)
    console.log(`Account 2 ETH balance Before Transaction: ${ethers.utils.formatEther(RecieverBalanceBefore)}\n`)
    
    

    // Sending ethers
    const tx = await wallet.sendTransaction({ 
        to: account2,
        value: ethers.utils.parseEther("0.050")
    })

    // Waiting for the transactions to be mined
    await tx.wait()
    console.log(tx)

    // Account 1 balance after transfer
    const SenderBalanceAfter = await provider.getBalance(account1)
    // Account 2 balance after transfer
    const RecieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nAccount 1 ETH balance After Transaction: ${ethers.utils.formatEther(SenderBalanceAfter)}`)
    console.log(`Account 2 ETH balance After Transaction: ${ethers.utils.formatEther(RecieverBalanceAfter)}\n`)
}

main()