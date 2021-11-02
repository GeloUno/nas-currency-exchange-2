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
        <div className="flex w-full h-20 justify-center items-center">
          <h3 className="text-blue-500 text-3xl font-sans font-semibold ">
            Konwerter walut
          </h3>
        </div>
        <FormExchange />
      </div>
    </div>
  );
}

export default BodyExchange;
