const { ethers } = require("ethers");

const INFURA_ID = 'd0c4db9e7e0041c3bace607d958c5e1c'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0x3cD751E6b0078Be393132286c442345e5DC49699'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n `)
}

main()



