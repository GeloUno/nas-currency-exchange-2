interface IBodyExchange {
  width: number;
}

function BodyExchange({ width }: IBodyExchange) {
  return (
    <div
      className="absolute bg-white h-full  rounded-2xl"
      style={{ width: width }}
    ></div>
  );
}

export default BodyExchange;
