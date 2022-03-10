import React from 'react';
import styled from 'styled-components';
import { PanellWebButons } from './panellBotons' 

export const PanellWeb = ({valorPags, handlePlusPageButton, handleRestPageBtn, valorLanguage ,handleSumLanguButton, handleRestLanguageBtn, handleChangePags, handleChangeLanguage}) => {

    return (
        <BorderBox>
            <div>
                <InputText>Número pàgines</InputText>
                <PanellWebButons handleClickSum={handlePlusPageButton} pagsValue={valorPags} handleClickRest={handleRestPageBtn} handleChange={handleChangePags}></PanellWebButons>  
            </div>
            <div>
                <InputText>Número idiomes</InputText>
                <PanellWebButons handleClickSum={handleSumLanguButton} languageValue={valorLanguage} handleClickRest={handleRestLanguageBtn} handleChange={handleChangeLanguage}></PanellWebButons>  
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





