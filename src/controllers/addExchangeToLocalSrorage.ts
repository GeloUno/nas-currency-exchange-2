import { IExchangeLocalStorage } from "../models/IExchangeLocalStorage";

export function addExchangeToLocalStorage(
    valueFrom: string,
    currencyFrom: string,
    valueTo: string,
    currencyTo: string,
) {
    let dataLocalStore: Array<IExchangeLocalStorage> = [];
    const dataFromLocalStorage = localStorage.getItem('exchange');
    if (dataFromLocalStorage) {
        dataLocalStore = JSON.parse(dataFromLocalStorage);
    }

    const exchangeDate = new Date();
    const data: IExchangeLocalStorage = { valueFrom, currencyFrom, valueTo, currencyTo, exchangeDate };

    dataLocalStore.push(data);
    const dataToJson = JSON.stringify(dataLocalStore);
    localStorage.setItem('exchange', dataToJson);
}