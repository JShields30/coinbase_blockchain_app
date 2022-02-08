import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs'



export const Coin = () => {
  return <div></div>;
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