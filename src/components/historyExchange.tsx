import { useWindowWidth } from '@react-hook/window-size';

interface IHistoryExchangeProps {
  width: number;
}
function HistoryExchange({ width }: IHistoryExchangeProps) {
  const widthHelper = useWindowWidth();

  return (
    <div
      className="absolute h-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl"
      style={{ width, left: `${widthHelper / 2 + 60 - width / 2}px` }}
    >
      HistoryExchange
    </div>
  );
}

export default HistoryExchange;
