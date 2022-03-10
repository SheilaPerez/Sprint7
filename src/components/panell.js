import React from 'react';
import styled from 'styled-components';
import { PanellWebButons } from '../components/panellBotons' 

export const PanellWeb = ({valorPags, handlePlusPageButton, handleRestPageBtn, valorLanguage ,handleSumLanguButton, handleRestLanguageBtn, handleChangePags, handleChangeLanguage, clickOpenPage, clickOpenLanguage}) => {

    return (
        <BorderBox>
            <div>
                <InputText>Número pàgines</InputText>
                <PanellWebButons handleClickSum={handlePlusPageButton} pagsValue={valorPags} handleClickRest={handleRestPageBtn} handleChange={handleChangePags} clickOpen={clickOpenPage}></PanellWebButons>  
            </div>
            <div>
                <InputText>Número idiomes</InputText>
                <PanellWebButons handleClickSum={handleSumLanguButton} languageValue={valorLanguage} handleClickRest={handleRestLanguageBtn} handleChange={handleChangeLanguage} clickOpen={clickOpenLanguage}></PanellWebButons>  
            </div>
        </BorderBox>
    )
}

const BorderBox = styled.div`
    border: 3px black solid;
    border-radius: 25px;
    width: 330px;
    padding: 20px;
`
const InputText = styled.p`
    margin: 12px;
    display: inline-block;
`





