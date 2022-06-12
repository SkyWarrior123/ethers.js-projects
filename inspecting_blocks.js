const { ethers } = require("ethers");

const INFURA_ID = 'd0c4db9e7e0041c3bace607d958c5e1c'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${block}\n`)
    
    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)
    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()