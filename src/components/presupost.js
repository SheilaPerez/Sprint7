import React, { useState, useEffect } from 'react';
import { TextCheck } from '../styled/styles';
import { PanellWeb } from '../styled/panell';
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Presupost() : Element {
  const [webChecked, setWebChecked] = useState(false);
  const [consuChecked, setConsuChecked] = useState(false);
  const [adsChecked, setAdsChecked] = useState(false);
  const [price, setPrice] = useState(0);
  const [pags, setPags] = useState(0);
  const [languages, setLanguages] = useState(0);

  useEffect(() => {
    setWebChecked(JSON.parse(localStorage.getItem('web')));
    setConsuChecked(JSON.parse(localStorage.getItem('consultoria')));
    setAdsChecked(JSON.parse(localStorage.getItem('ads')));
    setPags(JSON.parse(localStorage.getItem('paginas')));
    setLanguages(JSON.parse(localStorage.getItem('lenguage')));
    setPrice(JSON.parse(localStorage.getItem('price')));  
  }, []);

  useEffect(() => {
    localStorage.setItem('web', webChecked);
    localStorage.setItem('consultoria', consuChecked);
    localStorage.setItem('ads', adsChecked);
    localStorage.setItem('paginas', pags);
    localStorage.setItem('lenguage', languages);
    localStorage.setItem('price', price);
  }, [pags,languages, webChecked, consuChecked, adsChecked, price]);

  const prices = (value, checked) => {
    if (checked) {
      setPrice(value + price);
    } else {
      setPrice(price - value);
    }
  }

  const handlePlusPageBtn = () => {
      setPags(pags + 1);
  }

  const handleRestPageButton = () => {
    if (pags > 0) {
      setPags(pags - 1);
    }
  }

  const handleSumLanguBtn = () => {
    setLanguages(languages + 1);
  }

  const handleRestLanguageButton = () => {
    if (languages > 0) {
      setLanguages(languages - 1);
    }
  }

  const printPrice = () => {
    return price + (pags * 30) + (languages * 30);
  }

  const writePages = (event) => {
    setPags(event);
  }

  const writeLanguage = (event) => {
    setLanguages(event);
  }
  return (
    <DivApp>
        <h3>Que vols fer?</h3> 
        <form>
            <div>
                <input type="checkbox" checked={webChecked} onChange={e => prices(500, e.target.checked, setWebChecked(e.target.checked))}></input>
                <TextCheck>Una pàgina web - 500e</TextCheck>
                {webChecked ? <PanellWeb handlePlusPageButton={handlePlusPageBtn} valorPags={pags} handleRestPageBtn={handleRestPageButton} handleChangePags={e => writePages(e.target.value)}
                handleSumLanguButton={handleSumLanguBtn} valorLanguage={languages} handleRestLanguageBtn={handleRestLanguageButton} handleChangeLanguage={e => writeLanguage(e.target.value)}></PanellWeb> : false}
            </div>
            <div>
                <input type="checkbox" checked={consuChecked} onChange={e => prices(300, e.target.checked, setConsuChecked(e.target.checked))}></input>
                <TextCheck>Una consultoria - 300e</TextCheck>
            </div>
            <div>
                <input type="checkbox" checked={adsChecked} onChange={e => prices(200, e.target.checked, setAdsChecked(e.target.checked))}></input>
                <TextCheck>Una campanya de Google Ads - 200e</TextCheck>
            </div>
        </form>
        <p>Preu: {printPrice()} Euros</p>
        <StartBtn>
            <StyledLink to="/">Torna enrere...</StyledLink>
        </StartBtn>  
    </DivApp>         
  );

}

const DivApp = styled.div`
margin: 40px;
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
const StyledLink = styled(Link)`
    color: black;
    text-decoration:none;
    &:hover {
        color: white;
    }
`

export default Presupost;