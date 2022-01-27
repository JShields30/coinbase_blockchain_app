import styled from 'styled-components'
import { useWeb3 } from '@3rdweb/hooks'


export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <Wrapper>
    <div><button onClick={() => connectWallet('injected')}>Connect Wallet</button></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
height: 100vh;
max-width: 100vw;
background-color: #0a0b0d;
color: white;
display: grid;
place-items: center;
`