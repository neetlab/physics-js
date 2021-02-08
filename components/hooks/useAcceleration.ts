import { useRaf } from "react-use";

// 等速直線運動
export const useAcceleration = (v0: number, a: number) => {
  const t = useRaf(1000) * 1000;
  const x = v0 + a * t;
  return x;
}
