import { ICurrenciesCode } from './currencyCode';


export interface ICurrencies extends ICurrenciesCode {
    currencyName: string,
    currencySymbol: string | null,

}

export interface ICurrenciesData {
    results: {
        [key in keyof string]: ICurrencies
    };
};
