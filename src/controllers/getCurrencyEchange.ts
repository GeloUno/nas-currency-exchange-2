import { URL_CURRENCY_EXCHANGE } from '../shared/constants';
import { ICurrenciesCode } from '../models/currencyCode';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { ErrorDataFetch } from '../models/ErrorDataFetch';
import { ICurrenciesExchange } from '../models/ICurrenciesExchange';

export async function getCurrencyExchange(from: ICurrenciesCode, to: ICurrenciesCode) {
    try {
        const data: AxiosResponse<ICurrenciesExchange> = await axios.get(`${URL_CURRENCY_EXCHANGE}&q=${from.id}_${to.id}&compact=y`)
        return data
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.code) {
                throw new ErrorDataFetch(error.message, +error.code)
            } else {
                throw new ErrorDataFetch(error.message, 404)
            }
        }
        throw new ErrorDataFetch('error fetch data ', 404)

    }
}