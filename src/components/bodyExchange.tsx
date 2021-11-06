import FormExchange from './formExchange';

interface IBodyExchange {
  width: number;
}

function BodyExchange({ width }: IBodyExchange) {
  return (
    <div
      className="absolute bg-white h-full text-black rounded-2xl w-full"
      style={{ width: width }}
    >
      <div className="flex flex-col w-full mt-14">
        <FormExchange />
      </div>
    </div>
  );
}

export default BodyExchange;
