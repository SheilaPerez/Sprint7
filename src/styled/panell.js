import React from 'react';
import styled from 'styled-components';

export const PanellWeb = ({pages, languages}) => {
    const handleSetPagsValue = (event) => {
        pages(event.target.value)
    }
    
    const handleSetLanguagesValue = (event) => {
        languages(event.target.value)
    }


    return (
        <BorderBox>
            <div>
                <InputText>Número de pàgines</InputText>
                <input type='number' onChange={handleSetPagsValue}></input>
            </div>
            <div>   
                <InputText>Número d'idiomes</InputText>
                <input type='number' onChange={handleSetLanguagesValue}></input>
            </div>
        </BorderBox>
    )
}

const BorderBox = styled.div`
    border: 3px black solid;
    border-radius: 25px;
    width: 320px;
    padding: 20px;
`
const InputText = styled.p`
    margin: 12px;
    display: inline-block;
`





