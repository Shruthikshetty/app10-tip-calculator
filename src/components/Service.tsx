export default function Service({
  text,
  id,
  onRate,
  satisfaction,
}: ServiceProps) {
  return (
    <>
      <label htmlFor={`service${id}`}>{text}</label>
      <select
        name="service"
        id={`service${id}`}
        className="text-black"
        value={satisfaction}
        onChange={(e) => onRate(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okey (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </>
  );
}

type ServiceProps = {
  text: string;
  id: number;
  onRate: (rate: number) => void;
  satisfaction: number;
};
