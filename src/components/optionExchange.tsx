import { nanoid } from 'nanoid';
import React from 'react';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';

interface IOptionExchangeProps {
  currencyCodeContryArray: Array<ICurrencyCodeCounytry>;
}

function OptionExchange({ currencyCodeContryArray }: IOptionExchangeProps) {
  return (
    <div className="absolute bg-white w-32 h-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-md shadow-lg ">
      {currencyCodeContryArray.map((arr) => {
        return (
          <div key={nanoid()} className="p-1 pl-3 cursor-pointer">
            {arr.code}
          </div>
        );
      })}
    </div>
  );
}

export default OptionExchange;
