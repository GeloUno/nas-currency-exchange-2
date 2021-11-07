interface IBodyExchange {
  width: number;
  children: React.ReactNode;
  absolute?: boolean;
}

function BodyExchange({ width, children, absolute }: IBodyExchange) {
  return (
    <div
      className={`${
        absolute ? `absolute` : ``
      } bg-white h-full text-black rounded-2xl w-full`}
      style={{ width: width }}
    >
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
}

export default BodyExchange;
