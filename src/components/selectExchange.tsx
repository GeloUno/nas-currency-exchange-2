import { useState, useContext } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import OptionExchange from './optionExchange';
import NotificationContext from '../store/currencyContext';
import { ICurrenciesCode } from '../models/currencyCode';

interface ISelectExchangeProps {
  currency: ICurrenciesCode | undefined;
  setCurrency:
    | React.Dispatch<React.SetStateAction<ICurrenciesCode>>
    | undefined;
}

function SelectExchange({ currency, setCurrency }: ISelectExchangeProps) {
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const currencyCtx = useContext(NotificationContext);

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
      {showSelect && currencyCtx?.currencyCodeContryArray != undefined && (
        <OptionExchange
          currencyCodeContryArray={currencyCtx.currencyCodeContryArray}
          setShowSelect={setShowSelect}
          setCurrency={setCurrency}
        />
      )}
    </div>
  );
}

export default SelectExchange;
