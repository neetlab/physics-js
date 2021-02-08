import { useTime } from "./useTime";

// 等速直線運動
export const useLinearMotion = (v: number) => {
  const t = useTime();
  const x = v * t;
  return x;
}
