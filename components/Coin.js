import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins';



export const Coin = ({coin}) => {
  return <Wrapper>
      <div>
          <div style={{flex: 3}}>
            <NameCol>
                <CoinIcon>
                    <Image src={coin.logo} alt={coins.name} />
                </CoinIcon>
            </NameCol>
          </div>
      </div>
  </Wrapper>
};

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
`
const NameCol = styled.div`
    display: flex;
    align-items: center;
`
const CoinIcon = styled.div`
    width: 1.8rem;
    margin-right: 1rem;
`
const Primary = styled.div`
    margin-bottom: 0.1rem;
`
const Secondary = styled.div`
    color: #8a919e;
    font-size: 0.8rem;
`