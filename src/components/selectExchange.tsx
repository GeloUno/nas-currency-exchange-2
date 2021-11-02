import { useState, useContext } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import OptionExchange from './optionExchange';
import NotificationContext from '../store/currencyContext';

interface ISelectExchangeProps {
  currency: string;
}

function SelectExchange({ currency }: ISelectExchangeProps) {
  const [showSelect, setshowSelect] = useState<boolean>(false);
  const currencyCtx = useContext(NotificationContext);

  return (
    <div>
      <div
        className="relative flex w-32 p-3 shadow-md justify-between items-center rounded-md cursor-pointer"
        onClick={() => setshowSelect((prev) => !prev)}
      >
        <div className="flex">{currency}</div>
        <div className="flex">
          {!showSelect && <FiChevronDown />}
          {showSelect && <FiChevronUp />}
        </div>
      </div>
      {showSelect && currencyCtx?.currencyCodeContryArray != undefined && (
        <OptionExchange
          currencyCodeContryArray={currencyCtx.currencyCodeContryArray}
        />
      )}
    </div>
  );
}

export default SelectExchange;
