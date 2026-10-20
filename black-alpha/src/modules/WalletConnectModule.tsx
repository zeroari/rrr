import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import {configureChains, WagmiConfig} from 'wagmi'
import {polygonMumbai} from 'wagmi/chains'
import { publicProvider } from '@wagmi/core/providers/public'

// 1. Get projectId
const projectId = '14657272d71b78f6d0813dfae6e2c242' // main
// const projectId = '00c47be7a47fdc88354d136d480d84a1' // test

// 2. Create wagmiConfig
const metadata = {
    name: 'BlackAlpha',
    description: 'BlackAlpha',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// const chains = [polygonMumbai]
const { chains } = configureChains(
    [polygonMumbai],
    [publicProvider()],
)
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains,
    chainImages:{
        80001:'https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png',
        137:'https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png'
    },
    featuredWalletIds:[
        '20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66',
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
    ]

})

export default function WalletConnectModule(prop:any) {
    return (
        <WagmiConfig config={wagmiConfig}>
            {prop.children}
        </WagmiConfig>
    )
}