export function isBothInputsHaveEmptyString(firstInput: string | number, secondInput: string | number) {
    return firstInput === '' && secondInput === ''
}

export function isNotEmptyStringAndValueIsZero(data: string | number) {
    return data !== '' && +data === 0
}

export function isValueExchangeAndDataInputIsNumberOtherThanZero(exchangeValue: number | null, data: string | number) {
    return exchangeValue && +data !== 0
}

export function multiplyExchange(data: string | number, exchangeValue: number | null) {
    return (+data * +exchangeValue!).toFixed(2);
}
export function divideExchange(data: string | number, exchangeValue: number | null) {
    return (+data / +exchangeValue!).toFixed(2);
}