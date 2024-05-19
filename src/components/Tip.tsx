export default function Tip({ data }: TipProps) {
  const { bill, rating1, rating2 } = data;

  if (bill == 0)
    return (
      <h1 className="text-xl font-bold m-2">
        Start by entering the bill amount
      </h1>
    );

  const tip = Math.round((((rating1 + rating2) * 2) / 100) * bill);
  const total = bill + tip;

  return (
    <h1 className="text-xl font-bold m-2">
      You Pay ${total} (${bill} + ${tip} tip)
    </h1>
  );
}

type TipProps = {
  data: {
    bill: number;
    rating1: number;
    rating2: number;
  };
};
