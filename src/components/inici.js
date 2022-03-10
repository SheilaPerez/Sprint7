import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Inici = () : Element => {
    return (
        <div>
            <Title>Benvinguts!</Title>
            <SubTitle>Desde la nostra página web podreu demanar el servei que necessiteu i mirar el pressupost.</SubTitle>
            <CenterBtn>
                <StartBtn>
                    <StyledLink to="/presupost">Començar</StyledLink>
                </StartBtn>
            </CenterBtn>
        </div>
    );
}

const Title = styled.h1`
    color: #94B49F;
    text-align: center;
`
const SubTitle = styled.p`
    text-align: center;
`
const StartBtn = styled.button` 
    background-color: #E5E3C9;
    margin-top: 30px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    &:hover {
        background-color: #789395;
    }
`

const CenterBtn = styled.div`
    text-align: center;
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration:none;
    &:hover {
        color: white;
    }
`


export default Inici;