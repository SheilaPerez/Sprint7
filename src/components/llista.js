import React from 'react';
import styled from 'styled-components';


const Llista = ({ users }) => {
    return (
        <>
        {users.map((user) => {
            return (
                <div>
                    <p>{user.date}</p>
                    <NamesDiv>
                        <Names>Pressupost:</Names><NamesInput>{user.budget}</NamesInput>
                    </NamesDiv>
                    <NamesDiv>
                        <Names>Client:</Names><NamesInput>{user.name}</NamesInput>
                    </NamesDiv>
                    <p>{user.checks.map((check) => {
                        return (
                            <>
                                {check}
                            </>
                        )
                    })}</p>
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
