import { useState } from "react";
import { useRaf, useRafLoop } from "react-use";

// 等速直線運動
export const useLinearMotion = (v: number) => {
  const [t, setT] = useState(0);

  useRafLoop((time) => {
    setT(time / 1000);
  });

  const x = v * t;
  return x;
}
