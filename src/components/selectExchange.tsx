import { useState, useContext } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import OptionExchange from './optionExchange';
import { ICurrenciesCode } from '../models/currencyCode';
import CurrencyContext from '../store/currencyContext';

interface ISelectExchangeProps {
  currency: ICurrenciesCode | undefined;
  setCurrency(code: ICurrenciesCode): void;
}

function SelectExchange({ currency, setCurrency }: ISelectExchangeProps) {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const currencyCtx = useContext(CurrencyContext);

  return (
    <div>
      <div
        className="relative flex w-32 p-3 shadow-md justify-between items-center rounded-md cursor-pointer"
        onClick={() => setShowSelect((prev) => !prev)}
      >
        <div className="flex">{currency?.id}</div>
        <div className="flex">
          {!showSelect && <FiChevronDown />}
          {showSelect && <FiChevronUp />}
        </div>
      </div>
      {showSelect && currencyCtx?.currencyCodeArray != undefined && (
        <OptionExchange
          currencyCodeContryArray={currencyCtx.currencyCodeArray}
          setShowSelect={setShowSelect}
          setCurrency={setCurrency}
        />
      )}
    </div>
  );
}

export default SelectExchange;
