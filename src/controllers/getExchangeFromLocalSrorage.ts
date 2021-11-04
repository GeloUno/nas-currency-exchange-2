import { IExchangeLocalStorage } from "../models/IExchangeLocalStorage";

export function getExchangeFromLocalStorage(): Array<IExchangeLocalStorage> {
    let dataLocalStore: Array<IExchangeLocalStorage> = [];
    const dataFromLocalStorage = localStorage.getItem('exchange');
    if (dataFromLocalStorage) {
        dataLocalStore = JSON.parse(dataFromLocalStorage);
    }
    return dataLocalStore

}