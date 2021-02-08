import { useRaf } from "react-use";
import { useTime } from "./useTime";

// 等速直線運動
export const useAcceleration = (v0: number, a: number) => {
  const t = useTime();
  const v = v0 + a * t;
  const x = (v0 * t) + (0.5 * a * (t ** 2));
  return [x, v];
}
