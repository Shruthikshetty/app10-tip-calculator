export default function Bill({ bill, onBill }: BillProps) {
  return (
    <>
      <label htmlFor="bill-amount">How much was the Bill</label>
      <input
        type="text"
        id="bill-amount"
        className=" px-2 text-black"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      />
    </>
  );
}

type BillProps = {
  bill: number;
  onBill: (price: number) => void;
};
