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

  const handleExtraPags = (numPags) => {
    setPags(numPags);
  }

  const handleExtraLanguages = (numLanguages) => {
    setLanguages(numLanguages);
  }

  const printPrice = () => {
    return price + (pags * 30) + (languages * 30);
  }



  return (
    <Fragment>
      <p>Que vols fer?</p>
      <form>
        <div>
          <input type="checkbox" checked={webChecked} onChange={e => prices(500, e.target.checked, setWebChecked(e.target.checked))}></input>
          <TextCheck>Una pàgina web - 500e</TextCheck>
          {webChecked ? <PanellWeb pages={handleExtraPags} languages={handleExtraLanguages}></PanellWeb> : false}
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
