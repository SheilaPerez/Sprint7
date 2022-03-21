import React from 'react';
import styled from 'styled-components'

const OrderData = ({ clickOrderData }) => {
  
    return (
        <>
            <OrderBtn type="button" onClick={clickOrderData}>Data pressupost</OrderBtn>
        </>
    )
}

const OrderBtn = styled.button`
    background-color: #E5E3C9;
    margin: 5px 5px;
    padding: 8px;
    border-radius: 10px;
    border: none;
    color:  #789395;
    cursor:pointer;

`

export default OrderData;