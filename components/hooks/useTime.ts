import { useEffect, useState } from "react";
import { useRafLoop } from "react-use"

export type UseTimeRequest = {
  readonly refreshOn: number;
}

export const useTime = (req: UseTimeRequest = { refreshOn: 10 }) => {
  const [t, setT] = useState(0);
const [ticks, setTicks] = useState(0);

  useRafLoop((time) => {
    setT((time / 1000) - (ticks * req.refreshOn));
  });

  // Refresh
  useEffect(() => {
    if (t >= req.refreshOn) {
      setTicks(ticks + 1);
    }
  }, [t])

  return t;
}
