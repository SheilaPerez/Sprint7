import React from 'react';
import styled from 'styled-components';

function Popup({ valorPags, valorLanguage, type, handleClickClose }) {

    return (
        <Modal onClick={handleClickClose}>
                {type === 'page' ? <ModalText>Dintre de la web escollida el número de pàginas que has seleccionat es: {valorPags} </ModalText> : null}
                {type === 'language' ? <ModalText>Dintre de la web escollida el número d'idiomes que vols es: {valorLanguage} </ModalText> : null}
        </Modal>
    )
}

const Modal = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(158,158,158,0.6);
    height: 100vh;
`

const ModalText = styled.p`
    background-color: white;
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 50px;
    width: 400px;
    border-radius: 25px;
    border: 4px solid black;
`

export default Popup;