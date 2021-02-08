import classNames from "classnames";
import { useState } from "react";
import { Ball } from "../components/app/Ball";
import { useLinearMotion } from "../components/hooks/useLinearMotion";
import { useAcceleration } from "../components/hooks/useAcceleration";

const Linear = () => {
  const [velocity, setVelocity] = useState(1);
  const x = useLinearMotion(velocity);

  return (
    <>
      <h2 className="text-lg font-bold">等速直線運動</h2>

      <label>
        速度 [m/s]
        <input
          type="number"
          onChange={(e) => setVelocity(Number(e.target.value))}
        />
      </label>

      <div
        className={classNames(
          "relative",
          "w-screen",
          "h-screen",
          "bg-gray-200"
        )}
      >
        <Ball x={x} y={0} />
      </div>
    </>
  );
};

const Acceleration = () => {
  const [v0, setInitialVelocity] = useState(1);
  const [a, setAcceleration] = useState(1);
  const x = useAcceleration(0, 1);

  return (
    <>
      <h2 className="text-lg font-bold">等加速度運動</h2>

      <label>
        初速度 [m/s]
        <input
          type="number"
          value={v0}
          onChange={(e) => setInitialVelocity(Number(e.target.value))}
        />
      </label>

      <label>
        加速度 [m/s^2]
        <input
          type="number"
          value={a}
          onChange={(e) => setAcceleration(Number(e.target.value))}
        />
      </label>

      <div
        className={classNames(
          "relative",
          "w-screen",
          "h-screen",
          "bg-gray-200"
        )}
      >
        <Ball x={x} y={0} />
      </div>
    </>
  );
};

const Movement = () => {
  return (
    <div className={classNames("w-full", "h-full")}>
      <Linear />
      <Acceleration />
    </div>
  );
};

export default Movement;
