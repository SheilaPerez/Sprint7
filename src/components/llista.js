import React from 'react';
import styled from 'styled-components';


const Llista = ({ users }) => {
    return (
        <>
        {users.map((user, userIndex) => {
            return (
                <div key={userIndex}>
                    <p>{user.date}</p>
                    <NamesDiv>
                        <Names>Pressupost:</Names><NamesInput>{user.budget}</NamesInput>
                    </NamesDiv>
                    <NamesDiv>
                        <Names>Client:</Names><NamesInput>{user.name}</NamesInput>
                    </NamesDiv>
                    <div>{user.checks.map((check, index) => {
                        return (
                            <span key={index}>
                                {check}
                            </span>
                        )
                    })}</div>
                    <Price>{user.finalPrice} Euros</Price>
                    <hr></hr>
                </div>
            )
        })}
        </>
    )
}

const Names = styled.h4`
    display: inline-block;
    margin: 0px 10px 0px 0px;
`
const NamesInput = styled.p`
    display: inline-block;
    margin: 8px 0px;
`
const NamesDiv = styled.div`
    display: block;
`
const Price = styled.p`
    color: red;
`


export default Llista;
