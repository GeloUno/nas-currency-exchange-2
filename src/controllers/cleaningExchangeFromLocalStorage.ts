import { IExchangeLocalStorage } from "../models/IExchangeLocalStorage";

export function cleaningExchangeFromLocalStorage() {
    let dataLocalStore: Array<IExchangeLocalStorage> = [];
    const dataFromLocalStorage = localStorage.removeItem('exchange');

}
