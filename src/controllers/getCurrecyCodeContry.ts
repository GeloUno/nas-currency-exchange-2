import axios, { AxiosResponse } from "axios";
import { URL_CURRENCY_CODE_CONUTRY } from '../shared/constants';
import { ICurrenciesData } from '../models/currencyCodeData';
import { ErrorDataFetch } from "../models/ErrorDataFetch";

export async function getCurrencyCodeCountry() {
    try {
        const data: AxiosResponse<ICurrenciesData> = await axios.get(URL_CURRENCY_CODE_CONUTRY)
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