export function findIndexOf(currency: string | undefined | null, dataFilter: string): boolean {
    if (currency == undefined) return false
    const dataIndexOfName = currency.trim().toLocaleLowerCase().indexOf(dataFilter!.toLocaleLowerCase());

    return dataIndexOfName >= 0 ? true : false;
}