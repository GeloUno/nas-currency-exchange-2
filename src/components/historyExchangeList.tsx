import React from 'react';
import { IExchangeLocalStorage } from '../models/IExchangeLocalStorage';
import { nanoid } from 'nanoid';
import { MdArrowRightAlt } from 'react-icons/md';

interface IHistoryExchangeListProps {
  exchangeHistory: Array<IExchangeLocalStorage>;
}

function HistoryExchangeList({ exchangeHistory }: IHistoryExchangeListProps) {
  return (
    <div className="justify-center text-center text-xs overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-blue-400">
      {exchangeHistory &&
        exchangeHistory.map((data) => {
          return (
            <div
              key={nanoid()}
              className="flex flex-row justify-between py-2 text-blue-300 border-b-2 border-blue-300"
            >
              <div className="flex w-20 justify-end">{data.exchangeDate}</div>
              <div className="flex w-20 justify-end">{`${data.valueFrom} ${data.currencyFrom}`}</div>
              <div className="text-white text-center flex justify-center self-center">
                <MdArrowRightAlt />
              </div>
              <div className="flex w-20 justify-end pr-4">{`${data.valueTo} ${data.currencyTo}`}</div>
            </div>
          );
        })}
    </div>
  );
}

export default HistoryExchangeList;
