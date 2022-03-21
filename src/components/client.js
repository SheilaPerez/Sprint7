import React, { useState } from 'react';
import styled from 'styled-components';
import Llista from './llista';
import OrdreAlfabet from './ordreAlfabet';
import OrderData from './orderData';
import ReiniciarOrdre from './reiniciarOrdre';

const Client = ({ web, pags, languages, consultoria, ads, price }) => {
    const [noneOrderedUsers, setNoneOrderedUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [addUserName, setAddUserName] = useState("");
    const [addBudgetName, setAddBudgetName] = useState("");
    const dateTime = new Date();
    const showDate = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`;

    const clientName = (event) => {
        setAddUserName(event);
    }

    const budgetName = (event) => {
        setAddBudgetName(event);
    }

    const serviceChecked = () => {
        let result = [];
        if (web) {
            result.push(<p>*Web Checked</p>)
            result.push(<p>***Pàgines: {pags}</p>)
            result.push(<p>***Idiomes: {languages}</p>)
        }
        if (consultoria) {
            result.push(<p>*Consultoria Checked</p>);
        }
        if (ads) {
            result.push(<p>*Google Ads Checked</p>)
        }
        return result;
    }

    const handleClickAgregar = () => {
        const newUser = {
            date: showDate,
            name: addUserName,
            budget: addBudgetName,
            checks: serviceChecked(),
            finalPrice: price
        };
        setNoneOrderedUsers([...users, newUser]);
        setUsers([...users, newUser]);
        setAddUserName("");
        setAddBudgetName("");
    };
    
    const alphabeticalOrder = () => {
        setUsers([...users].sort((userA, userB) => {
            if (userA.budget > userB.budget) {
                return 1;
            }
            if (userA.budget < userB.budget) {
                return -1;
            }
            return 0;
        }));
    
    }

    const dataOrder = () => {
        setUsers([...users].sort((dataA, dataB) => dataA.date - dataB.date));
    }

    const reiniciOrder = () => {
        setUsers([...noneOrderedUsers]);
    }

    return (
        <DivClient>
            <h3>Guarda el teu pressupost aquí.</h3>
            <div>
                <Name>Nom presupost: </Name>
                <input type="text" value={addBudgetName} onChange={e => budgetName(e.target.value)}></input>
            </div>
            <div>
                <Name>Nom client: </Name>
                <input type="text" value={addUserName} onChange={e => clientName(e.target.value)}></input>
            </div>
            <AddBtn type="button" onClick={handleClickAgregar}>Afegir</AddBtn>
            <h4>-Troba el teu pressupost</h4>
            <OrdreAlfabet clickOrderAlpha={alphabeticalOrder}></OrdreAlfabet>
            <OrderData clickOrderData={dataOrder}></OrderData>
            <ReiniciarOrdre handleReinici={reiniciOrder}></ReiniciarOrdre>
            <h4>Llistat pressupostos</h4>
            <ul>
                <Llista users={users}></Llista>
            </ul>
        </DivClient>        
    )

}

const DivClient = styled.div` 
    display: inline-block;
    float: right;
    margin: 40px 80px;

`

const AddBtn = styled.button`
    background-color: #789395;
    color: white;
    font-size: 15px;
    padding: 8px 25px;
    border-radius: 25px;
    border: none;
    display: inline-block;
    cursor:pointer;
`
const Name = styled.p`
    display: inline-block;
    margin-right: 10px;
`

export default Client;