import React from 'react';

export default function CurrencyRow(props){
    const {currencyOptions, selectedCurrency,onChangeCurrency,amount,onChangeAmount}= props;
    return(<div>
        <input type='number' className='input' value={amount} onChange={onChangeAmount}/>
        <select value={selectedCurrency} onChange={onChangeCurrency} >
            {currencyOptions.map(currencyOption=>
            <option key={currencyOption} value={currencyOption }>
                {currencyOption}
            </option>)}
            
        </select>
    
    
    </div>)
}