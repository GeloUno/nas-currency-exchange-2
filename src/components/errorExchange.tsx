import { IoCloseSharp } from 'react-icons/io5';
import ErrorContext from '../store/errorContext';
import { useContext } from 'react';

function ErrorExchange() {
  const errorCtx = useContext(ErrorContext);
  return (
    <div>
      <div className="fixed right-10 bottom-10 flex flex-row w-1/4 h-40 opacity-100 rounded-lg z-20">
        <div className="flex h-full w-3 bg-red-600 rounded-l-lg"></div>
        <div className="flex flex-col h-full w-full bg-white text-black  rounded-r-lg p-5">
          <div className="flex flex-row justify-between">
            <h1 className="p-2 font-bold">Komunikat błędu</h1>
            <div
              className="text-2xl cursor-pointer"
              onClick={() => errorCtx?.hiddenErrorExchangeMessage()}
            >
              <IoCloseSharp />
            </div>
          </div>
          <p className="p-2">
            Nie udało się wykonać żądanej operacji, ponieważ nie znaleziono
            zasobu powiązanego z żądaniem.
          </p>
        </div>
      </div>
      <div
        className="fixed w-screen h-screen top-0 right-0  opacity-40"
        style={{ backgroundColor: '#454860' }}
      ></div>
    </div>
  );
}

export default ErrorExchange;
