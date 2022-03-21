import React from 'react';
import styled from 'styled-components'

const OrdreAlfabet = ({ clickOrderAlpha }) => {
    return (
        <>
            <OrderBtn type="button" onClick={clickOrderAlpha}>Nom pressupost</OrderBtn>
        </>
    )
}

const OrderBtn = styled.button`
    background-color: #E5E3C9;
    margin-top: 8px;
    padding: 8px;
    border-radius: 10px;
    border: none;
    color:  #789395;
    cursor:pointer;

`

export default OrdreAlfabet;     