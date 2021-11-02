import HistoryExchange from './historyExchange';
import BodyExchange from './bodyExchange';

function SectionExchange() {
  const width = 462;
  return (
    <div
      className="flex absolute top-14 left-0  w-screen  justify-center"
      style={{ height: '503px' }}
    >
      <HistoryExchange width={width} />
      <BodyExchange width={width} />
    </div>
  );
}

export default SectionExchange;
