import { render, screen, waitFor } from '@testing-library/react';

import HistoryExchange from './historyExchange';

describe('history exchange', () => {
  it('should render', async () => {
    expect(render(<HistoryExchange width={509} />)).toBeTruthy();
  });

  it('should have visibily body history exchange', async () => {
    render(<HistoryExchange width={509} />);
    const result = screen.getByTestId('bodyHistoryExchange');
    expect(result).toBeInTheDocument();
    expect(result).toBeVisible();
  });

  it('should have button history body', async () => {
    render(<HistoryExchange width={509} />);
    const result = screen.getByTestId('historyButtonBody');
    expect(result).toBeInTheDocument();
    expect(result).toBeVisible();
  });

  it('should not have button icon', async () => {
    render(<HistoryExchange width={509} />);

    await waitFor(() => {
      const result = screen.queryByTestId('historyButtonIcon');
      expect(result).not.toBeInTheDocument();
      expect(result).toBeFalsy();
    });
  });

  it('should have button description', async () => {
    render(<HistoryExchange width={509} />);
    const result = screen.getByTestId('historyButtonDescription');
    expect(result).toBeInTheDocument();
    expect(result).toBeVisible();
  });
});
