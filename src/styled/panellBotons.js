import React from 'react';
import styled from 'styled-components';

export const PanellWebButons = ({handleClickSum, pagsValue, handleClickRest, languageValue, handleChange}) => {


    return (
        <>
            <InputBtns type='button' onClick={handleClickSum}>+</InputBtns>
            <NumInput value={pagsValue | languageValue} type='text' onChange={handleChange}></NumInput>
            <InputBtns type='button' onClick={handleClickRest}>-</InputBtns>
        </>
    )
}


const NumInput = styled.input`
    width: 30px; 
    border: none;
`

const InputBtns = styled.button`
    background-color: #789395;
    font-size: 22px;
    color: white;
    width: 15%;
    margin: 0px 5px 0px 15px;
    border-radius: 20px;
    border: none;
    cursor:pointer;
`