import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import Web3 from 'web3'
import React, { useState, useEffect } from 'react' // Import React

const SwapWidgetComponent = () => {
  const ethEnabled = () => {
    if (window.web3) {
      window.web3 = new Web3(window.ethereum)
      window.ethereum.enable()
      return true
    }
    return false
  }

  const TOKEN_LIST = [
    // ... (your token list)
  ]

  const UNISWAP_TOKEN_LIST = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org'

  const INPUT = 'NATIVE' // Special address for native token
  const OUTPUT = '0xdAC17F958D2ee523a2206206994597C13D831ec7'

  const isWindowLoaded = () => {
    return (
      typeof window.ethereum !== 'undefined' ||
      typeof window.web3 !== 'undefined'
    )
  }

  const getEthereumProvider = () => {
    return new Web3(window.ethereum)
  }

  const jsonRpcEndpoint = 'https://rinkeby.infura.io/v3/'

  const [ethereum, setEthereum] = useState()
  useEffect(() => {
    setEthereum(window.ethereum)
  }, [])

  return (
    <div>
      {/* Your JSX code here */}
      <SwapWidget
        provider={ethereum}
        jsonRpcEndpoint={jsonRpcEndpoint}
        tokenList={TOKEN_LIST}
      />
    </div>
  )
}

export default SwapWidgetComponent
