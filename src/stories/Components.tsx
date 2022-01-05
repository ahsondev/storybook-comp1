import React from 'react'
import styled from "styled-components"

export const ComponentContainer = styled.div`
  background-color: #e16146;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`

export const ComponentHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 0;
  font-size: 60px;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const ComponentComment = styled.div`
  margin-top: 60px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  font-family: 'Roboto';

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 24px;
  }
`

export const ProblemSolution = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 0 0;
`

export const TableLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    display: block;
  }

  @media (max-width: 768px) {
    .icon-wrapper {
      img {
        width: 90%;
      }
    }
  }
`

export const TableHeader = styled.div`
  background: #eda865;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: 'Roboto';
  font-weight: bold;
`

export const TableItem = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    position: unset;
    flex-direction: column;
`

export const TableSubItem = styled.div`
  width: 50%;
  border: 1px solid #eda865;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  text-align: left;
  font-family: 'Roboto';
  font-size: 12px;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
  }
`

export const Problem = styled(TableSubItem)`
  padding-right: 80px;
  border-right: none;

  @media (max-width: 768px) {
    padding: 20px;
    border-right: 1px solid #eda865;
    padding-bottom: 60px;
  }
`

export const Solution = styled(TableSubItem)`
  padding-left: 80px;

  @media (max-width: 768px) {
    padding: 20px;
    padding-top: 80px;
  }
`
export const TableItemHeader = styled.div`
  font-size: 16px;
  text-align: left;
  margin: 0 0 10px 0;
  font-family: 'Roboto';
  font-weight: 500;
  line-height: 20px;
`

export const TableItemUl = styled.ul`
  margin: 0 0 0 20px;
  list-style-type: disc;

  li {
    margin: 0;
    text-align: left;
  }
`
