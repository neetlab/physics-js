import { useAcceleration } from "./useAcceleration";
import { useLinearMotion } from "./useLinearMotion";

export const useHorizontalLaunch = (vx0: number) => {
  const x = useLinearMotion(vx0);
  const [y, vy] = useAcceleration(0, 9.8);
  return [x, y, vy];
}
