import React from 'react'
import styled from "styled-components"

import './styles/main.scss'

interface PropsType {
  number: Number
}

const ItemNumber = (props: PropsType) => {
  const { number } = props

  return (
    <ItemNumberWrapper>
      <div className='image-wrapper'>
        <img src="/number-wrapper.png" alt="number-wrapper" />
      </div>
      <div className='number-wrapper'>
        {number}
      </div>
    </ItemNumberWrapper>
  )
}

const ItemNumberWrapper = styled.div`
  .image-wrapper {
    position: absolute;
    width: 50px;
    height: 50px;
    left: calc(50% - 16px);
    top: calc(50% - 25px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .number-wrapper {
    position: absolute;
    width: 50px;
    height: 50px;
    left: calc(50% - 25px);
    top: calc(50% - 25px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Roboto';
  }

  @media (max-width: 768px) {
    .image-wrapper {
      position: absolute;
      width: unset;
      height: unset;
      left: calc(50% - 60px);
      bottom: -58px;
      top: unset;
      transform: rotate(90deg);

      img {
        display: block;
      }
    }

    .number-wrapper {
      position: absolute;
      width: 50px;
      height: unset;
      left: calc(50% - 25px);
      bottom: -25px;
      top: unset;
    }
  }
`

export default ItemNumber
