import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from './popup'


function Btnpopup({ handleClickOpen }) {

    return (
        <>
            <InfoBtn type="button" onClick={handleClickOpen}>!</InfoBtn>
        </>
    )
}

const InfoBtn = styled.button`
    border: 1px #FC4F4F solid;
    border-radius: 25px;
    background-color: #FFB5B5;
    cursor: pointer;
    margin-left: 5px;
    font-size: 15px;
    font-weight: bolder;
`

export default Btnpopup;
