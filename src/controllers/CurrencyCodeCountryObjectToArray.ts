import { ICurrenciesData } from '../models/currencyCodeData';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';

export function currencyCodeCountryObjectToArray(data: ICurrenciesData): Array<ICurrencyCodeCounytry> {

    const dataHelper: Array<ICurrencyCodeCounytry> = [];
    if (data) {
        for (const key in data.results) {
            dataHelper.push({
                code: data.results[key].id,
                name: data.results[key].currencyName,
                symbol:
                    data.results[key].currencySymbol !== null
                        ? data.results[key].currencySymbol
                        : null,
            });
        }

    }
    return dataHelper
}