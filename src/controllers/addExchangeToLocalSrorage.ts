import { IExchangeLocalStorage } from "../models/IExchangeLocalStorage";
import { getExchangeFromLocalStorage } from './getExchangeFromLocalSrorage';

export function addExchangeToLocalStorage(
    valueFrom: string,
    currencyFrom: string,
    valueTo: string,
    currencyTo: string,
) {
    let dataLocalStore: Array<IExchangeLocalStorage> = getExchangeFromLocalStorage()

    const exchangeDate = new Date().toLocaleString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const data: IExchangeLocalStorage = { valueFrom, currencyFrom, valueTo, currencyTo, exchangeDate };

    dataLocalStore.push(data);
    const dataToJson = JSON.stringify(dataLocalStore);
    localStorage.setItem('exchange', dataToJson);
}