import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormExchangeBody from './formExchangeBody';
import { ICurrenciesCode } from '../models/currencyCode';

describe('form exchange', () => {
  describe('in document', () => {
    const mockFnRefreshHistory = jest.fn();
    const mockFnSetCurrencyFrom = jest.fn();
    const mockFnSetCurrencyTo = jest.fn();
    const mockFnToggleCurrency = jest.fn();
    const curencyFrom: ICurrenciesCode = { id: 'PLN' };
    const curencyTo: ICurrenciesCode = { id: 'EUR' };
    const exchangeValue: number = 2.5;
    it('should render', async () => {
      expect(
        render(
          <FormExchangeBody
            currencyFrom={curencyFrom}
            currencyTo={curencyTo}
            exchangeValue={exchangeValue}
            isLoading={false}
            refreshHistoryFromLocalStorage={mockFnRefreshHistory}
            setCurrencyFrom={mockFnSetCurrencyFrom}
            setCurrencyTo={mockFnSetCurrencyTo}
            toggleCurrencyHandler={mockFnToggleCurrency}
          />
        )
      ).toBeTruthy();
    });
    it('should have section form', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('formExchangeBody');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('should have title form', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('formExchangeTitle');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('title form should have content', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('formExchangeTitle');
      expect(result).toHaveTextContent('Konwerter walut');
    });
    it('should have first form body', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('formExchangeForm');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });

    it('should have first label form', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('firstLabelForm');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('first label form should have content', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('firstLabelForm');

      expect(result).toHaveTextContent('PLN');
    });
    it('should have first input form', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('firstInputForm');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('should not have visible first error body', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.queryByTestId('firstInputError');
      await waitFor(() => {
        expect(result).not.toBeInTheDocument();
      });
    });

    ////////////////SECOND/////////////////

    it('should have second form body', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('secondInputFormBody');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });

    it('should have second label form', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('secondLabelForm');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('second label form should have content', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('secondLabelForm');

      expect(result).toHaveTextContent('EUR');
    });
    it('should have second input form', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('secondInputForm');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('should not have visible second error body', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.queryByTestId('secondInputError');
      await waitFor(() => {
        expect(result).not.toBeInTheDocument();
      });
    });

    it('should have toggle button exchange currency', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('toggleSelectExchane');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });

    it('should have first Select Currency', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('firstSelectExchane');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
    it('should have second Select Currency', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.getByTestId('secondSelectExchane');
      expect(result).toBeInTheDocument();
      expect(result).toBeVisible();
    });
  });
  describe('not values in inputs', () => {
    const mockFnRefreshHistory = jest.fn();
    const mockFnSetCurrencyFrom = jest.fn();
    const mockFnSetCurrencyTo = jest.fn();
    const mockFnToggleCurrency = jest.fn();
    const curencyFrom: ICurrenciesCode = { id: 'PLN' };
    const curencyTo: ICurrenciesCode = { id: 'EUR' };
    const exchangeValue: number = 2.5;

    it('first error should not be visible', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.queryByTestId('firstInputError');
      await waitFor(() => {
        expect(result).not.toBeInTheDocument();
      });
    });

    it('second error should not be visible', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const result = await screen.queryByTestId('secondInputError');
      await waitFor(() => {
        expect(result).not.toBeInTheDocument();
      });
    });
    it('after click submit button should show errors  ', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );
      const button = await screen.getByTestId('buttonSubmitForm');
      fireEvent.click(button);
      await waitFor(() => {
        const result1 = screen.queryByTestId('firstInputError');
        const result2 = screen.queryByTestId('secondInputError');
        expect(result1).toBeInTheDocument();
        expect(result1).toBeVisible();
        expect(result2).toBeInTheDocument();
        expect(result2).toBeVisible();
      });
    });
    it('after click submit button errors should have content', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );
      const button = await screen.getByTestId('buttonSubmitForm');
      fireEvent.click(button);
      await waitFor(() => {
        const errorFirst = screen.queryByTestId('firstInputError');
        const errorSecond = screen.queryByTestId('secondInputError');

        expect(errorFirst).toHaveTextContent('Nieprawidłowa wartość');
        expect(errorSecond).toHaveTextContent('Nieprawidłowa wartość');
      });
    });
  });

  describe('single input typing string', () => {
    const mockFnRefreshHistory = jest.fn();
    const mockFnSetCurrencyFrom = jest.fn();
    const mockFnSetCurrencyTo = jest.fn();
    const mockFnToggleCurrency = jest.fn();
    const curencyFrom: ICurrenciesCode = { id: 'PLN' };
    const curencyTo: ICurrenciesCode = { id: 'EUR' };
    const exchangeValue: number = 2.5;

    it('in first input should accept string typing', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      expect(firstInput.value).toBe('');

      fireEvent.change(firstInput, { target: { value: 'example' } });

      expect(firstInput.value).toBe('example');
    });
    it('in second input should accept string typing', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      expect(secondInput.value).toBe('');

      fireEvent.change(secondInput, { target: { value: 'example2' } });

      expect(secondInput.value).toBe('example2');
    });
    it('in first input should accept number typing', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      expect(firstInput.value).toBe('');

      fireEvent.change(firstInput, { target: { value: 12345 } });

      expect(firstInput.value).toBe('12345');
    });
    it('in second input should accept number typing', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      expect(secondInput.value).toBe('');

      fireEvent.change(secondInput, { target: { value: 67890 } });

      expect(secondInput.value).toBe('67890');
    });

    it('after typing string in first input should not show errors ', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      expect(firstInput.value).toBe('');

      fireEvent.change(firstInput, { target: { value: 'example' } });

      expect(firstInput?.value).toBe('example');
      await waitFor(() => {
        const errorFirst = screen.queryByTestId('firstInputError');
        const errorSecond = screen.queryByTestId('secondInputError');

        expect(errorFirst).not.toBeInTheDocument();
        expect(errorSecond).not.toBeInTheDocument();
      });
    });
    it('after typing string in first input secondInput should be reset value', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('');

      fireEvent.change(secondInput, { target: { value: 'example' } });
      fireEvent.change(firstInput, { target: { value: 'example' } });

      expect(secondInput.value).toBe('');
      expect(firstInput.value).toBe('example');
    });
    it('after typing string in second input firstInput should be reset value', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('');

      fireEvent.change(firstInput, { target: { value: 'example' } });
      fireEvent.change(secondInput, { target: { value: 'example' } });

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('example');
    });
    it('after typing string in first input and submit should show first error', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      const button = screen.getByTestId('buttonSubmitForm');

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('');

      userEvent.type(firstInput, 'example');

      userEvent.click(button);

      expect(firstInput.value).toBe('example');
      expect(secondInput.value).toBe('');

      const errorFirst = await screen.findByTestId('firstInputError');
      const errorSecond = await screen.queryByTestId('secondInputError');

      await waitFor(() => {
        expect(errorFirst).toBeInTheDocument();
        expect(errorFirst).toBeVisible();
        expect(errorFirst).toHaveTextContent('Nieprawidłowa wartość');
        expect(errorSecond).not.toBeInTheDocument();
      });
    });
    it('after typing string in second input and submit should show second error', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      const button = screen.getByTestId('buttonSubmitForm');

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('');

      userEvent.type(secondInput, 'example');

      userEvent.click(button);

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('example');

      const errorFirst = await screen.queryByTestId('firstInputError');
      const errorSecond = await screen.findByTestId('secondInputError');

      await waitFor(() => {
        expect(errorSecond).toBeInTheDocument();
        expect(errorSecond).toBeVisible();
        expect(errorSecond).toHaveTextContent('Nieprawidłowa wartość');
        expect(errorFirst).not.toBeInTheDocument();
      });
    });
  });
  describe('single input typing number', () => {
    const mockFnRefreshHistory = jest.fn();
    const mockFnSetCurrencyFrom = jest.fn();
    const mockFnSetCurrencyTo = jest.fn();
    const mockFnToggleCurrency = jest.fn();
    const curencyFrom: ICurrenciesCode = { id: 'PLN' };
    const curencyTo: ICurrenciesCode = { id: 'EUR' };
    const exchangeValue: number = 2.5;

    it('after typing number in first input and submit should show value in second input and no errors', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      const button = screen.getByTestId('buttonSubmitForm');

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('');

      userEvent.type(firstInput, '100');

      userEvent.click(button);
      await waitFor(() => {
        expect(firstInput.value).toBe('100');
        expect(secondInput.value).toBe('250.00');
      });

      const errorFirst = await screen.queryByTestId('firstInputError');
      const errorSecond = await screen.queryByTestId('secondInputError');

      await waitFor(() => {
        expect(errorSecond).not.toBeInTheDocument();
        expect(errorFirst).not.toBeInTheDocument();
      });
    });
    it('after typing number in second input and submit should show value in first input and no errors', async () => {
      render(
        <FormExchangeBody
          currencyFrom={curencyFrom}
          currencyTo={curencyTo}
          exchangeValue={exchangeValue}
          isLoading={false}
          refreshHistoryFromLocalStorage={mockFnRefreshHistory}
          setCurrencyFrom={mockFnSetCurrencyFrom}
          setCurrencyTo={mockFnSetCurrencyTo}
          toggleCurrencyHandler={mockFnToggleCurrency}
        />
      );

      const firstInput: HTMLInputElement = screen.getByTestId('firstInputForm');

      const secondInput: HTMLInputElement =
        screen.getByTestId('secondInputForm');

      const button = screen.getByTestId('buttonSubmitForm');

      expect(firstInput.value).toBe('');
      expect(secondInput.value).toBe('');

      userEvent.type(secondInput, '100');

      userEvent.click(button);
      await waitFor(() => {
        expect(firstInput.value).toBe('40.00');
        expect(secondInput.value).toBe('100');
      });

      const errorFirst = await screen.queryByTestId('firstInputError');
      const errorSecond = await screen.queryByTestId('secondInputError');

      await waitFor(() => {
        expect(errorSecond).not.toBeInTheDocument();
        expect(errorFirst).not.toBeInTheDocument();
      });
    });
  });
});
