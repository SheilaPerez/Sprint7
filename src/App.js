import React, { Fragment, useState } from 'react';
import { TextCheck } from './styled/styles';
import { PanellWeb } from './styled/panell'

function App() {

  const [webChecked, setWebChecked] = useState(false);
  const [consuChecked, setConsuChecked] = useState(false);
  const [adsChecked, setAdsChecked] = useState(false);
  const [price, setPrice] = useState(0);
  const [pags, setPags] = useState(0);
  const [languages, setLanguages] = useState(0);

  console.log(webChecked)

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
    <Fragment>
      <p>Que vols fer?</p>
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
      <p>Preu: {printPrice()}</p>
    </Fragment>
         
  );
}

export default App;
