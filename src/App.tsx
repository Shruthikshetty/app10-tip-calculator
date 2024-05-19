import { useState } from "react";
import Bill from "./components/Bill";
import ResetButton from "./components/ResetButton";
import Service from "./components/Service";
import Tip from "./components/Tip";

function App() {
  const [tipDetails, setTipDetails] = useState<tipDetailsType>({
    bill: 0,
    rating1: 5,
    rating2: 5,
  });

  function handleBill(price: number) {
    setTipDetails((s) => ({ ...s, bill: price }));
  }

  function handleRating1(rate: number) {
    setTipDetails((s) => ({ ...s, rating1: rate }));
  }

  function handleRating2(rate: number) {
    setTipDetails((s) => ({ ...s, rating2: rate }));
  }

  function handleReset() {
    setTipDetails({
      bill: 0,
      rating1: 5,
      rating2: 5,
    });
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-neutral-400">
        <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-4 gap-y-2 rounded-md">
          <Bill bill={tipDetails.bill} onBill={handleBill} />

          <Service
            text="How did you like the service ?"
            id={1}
            onRate={handleRating1}
            satisfaction={tipDetails.rating1}
          />
          <Service
            text="How did your friend  like the service ?"
            id={2}
            onRate={handleRating2}
            satisfaction={tipDetails.rating2}
          />

          <Tip data ={tipDetails}/>
          
          <ResetButton onReset={handleReset}/>
        </div>
      </div>
    </>
  );
}

export default App;

type tipDetailsType = {
  bill: number;
  rating1: number;
  rating2: number;
};
