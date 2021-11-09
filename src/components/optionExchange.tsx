import { nanoid } from 'nanoid';
import React, { useRef } from 'react';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';
import { ICurrenciesCode } from '../models/currencyCode';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { findIndexOf } from '../controllers/optional/findIndexOf';

interface IOptionExchangeProps {
  currencyCodeContryArray: Array<ICurrencyCodeCounytry>;
  setShowSelect(value: React.SetStateAction<boolean>): void;
  setCurrency(code: ICurrenciesCode): void;
}

function OptionExchange({
  currencyCodeContryArray,
  setShowSelect,
  setCurrency,
}: IOptionExchangeProps) {
  const [currencyFilter, setCurrencyFilter] =
    useState<Array<ICurrencyCodeCounytry> | null>(currencyCodeContryArray);
  const refInputFilter = useRef<HTMLInputElement>(null);

  function filterOnChangeInputHandler() {
    const dataInput = refInputFilter.current?.value;

    if (dataInput != undefined) {
      const data = currencyCodeContryArray.filter((data) => {
        const found =
          findIndexOf(data.name, dataInput) ||
          findIndexOf(data.symbol, dataInput) ||
          findIndexOf(data.code, dataInput);
        return found;
      });
      setCurrencyFilter(data);
    } else {
      setCurrencyFilter(currencyCodeContryArray);
    }
  }

  return (
    <div className="absolute bg-white w-32">
      <div className="">
        <input
          className="w-full py-1 px-2 outline-none border-gray-200 focus:border-blue-500 border-2 rounded-md"
          onChange={filterOnChangeInputHandler}
          placeholder={`filter`}
          ref={refInputFilter}
        />
        {/* <AiOutlineClose
          className={
            'flex absolute top-2 -right-1 cursor-pointer hover:text-blue-500 float-right mr-4 h-4 w-4 '
          }
          onClick={() => {}}
        /> */}
      </div>
      <div
        className={`overflow-y-scroll w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-md shadow-lg`}
        style={{ height: '7.4rem' }}
      >
        {currencyFilter &&
          currencyFilter.map((arr) => {
            return (
              <div
                key={nanoid()}
                className="p-1 pl-3 cursor-pointer"
                onClick={() => {
                  setCurrency({ id: arr.code } as ICurrenciesCode);
                  setShowSelect((prev) => !prev);
                }}
              >
                {arr.code}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OptionExchange;
