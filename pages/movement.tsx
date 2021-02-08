import classNames from "classnames";
import { useState } from "react";
import { Ball } from "../components/app/Ball";
import { useLinearMotion } from "../components/hooks/useLinearMotion";
import { useAcceleration } from "../components/hooks/useAcceleration";
import { Metre } from "../components/app/Metre";

const Linear = () => {
  const [velocity, setVelocity] = useState(50);
  const x = useLinearMotion(velocity);

  return (
    <>
      <h2 className="text-lg font-bold">等速直線運動</h2>
      <Metre
        velocity={velocity}
        acceleration={0}
        initialVelocity={velocity}
        onChangeVelocity={setVelocity}
      />

      <div className={classNames("relative", "w-screen", "h-8", "bg-gray-200")}>
        <Ball x={x} y={0} />
      </div>
    </>
  );
};

const Acceleration = () => {
  const [v0, setInitialVelocity] = useState(50);
  const [a, setAcceleration] = useState(200);
  const [x, v] = useAcceleration(v0, a);

  return (
    <>
      <h2 className="text-lg font-bold">等加速度運動</h2>
      <Metre
        velocity={v}
        acceleration={a}
        initialVelocity={v0}
        onChangeInitialVelocity={setInitialVelocity}
        onChangeAcceleration={setAcceleration}
      />

      <div
        className={classNames(
          "relative",
          "w-screen",
          "h-8",
          "overflow-scroll",
          "bg-gray-200"
        )}
      >
        <Ball x={x} y={0} />
      </div>
    </>
  );
};

const FreeFall = () => {
  const [y, v] = useAcceleration(0, 9.8);

  return (
    <div>
      <h2 className="text-lg font-bold">自由落下</h2>
      <Metre initialVelocity={0} acceleration={9.8} velocity={v} />

      <div
        className={classNames(
          "relative",
          "h-1/2",
          "w-8",
          "overflow-scroll",
          "bg-gray-200"
        )}
      >
        <Ball x={0} y={y} />
      </div>
    </div>
  );
};

const ThrowDown = () => {
  const [v0, setInitialVelocity] = useState(50);
  const [y, v] = useAcceleration(v0, 9.8);

  return (
    <div>
      <h2 className="text-lg font-bold">投げ下ろし</h2>
      <Metre
        initialVelocity={v0}
        acceleration={9.8}
        velocity={v}
        onChangeInitialVelocity={setInitialVelocity}
      />

      <div
        className={classNames(
          "relative",
          "h-1/2",
          "w-8",
          "overflow-scroll",
          "bg-gray-200"
        )}
      >
        <Ball x={0} y={y} />
      </div>
    </div>
  );
};

const ThrowUp = () => {
  const [v0, setInitialVelocity] = useState(50);
  const [y, v] = useAcceleration(v0, -9.8);

  return (
    <div>
      <h2 className="text-lg font-bold">投げ上げ</h2>
      <Metre
        initialVelocity={v0}
        acceleration={9.8}
        velocity={v}
        onChangeInitialVelocity={setInitialVelocity}
      />

      <div
        className={classNames(
          "relative",
          "h-1/2",
          "w-8",
          "overflow-scroll",
          "bg-gray-200",
          "transform",
          "rotate-180"
        )}
      >
        <Ball x={0} y={y} />
      </div>
    </div>
  );
};

const HorizontalEmission = () => {
  const [vx0, setInitialVelocity] = useState(50);

  const x = useLinearMotion(vx0);
  const [y, vy] = useAcceleration(0, 9.8);

  return (
    <div>
      <h2 className="text-lg font-bold">水平投射</h2>
      <h3>X軸方向</h3>
      <Metre
        initialVelocity={vx0}
        acceleration={9.8}
        velocity={vy}
        onChangeInitialVelocity={setInitialVelocity}
      />

      <h3>Y軸方向</h3>
      <Metre initialVelocity={0} acceleration={9.8} velocity={vy} />

      <div
        className={classNames(
          "relative",
          "h-screen",
          "w-screen",
          "overflow-scroll",
          "bg-gray-200",
          "transform"
        )}
      >
        <Ball x={x} y={y} />
      </div>
    </div>
  );
};

const Movement = () => {
  return (
    <div className={classNames("w-full", "h-full")}>
      <Linear />
      <Acceleration />

      <hr className="bg-gray-500 h-1 m-8" />

      <div className="flex justify-between h-screen">
        <FreeFall />
        <ThrowDown />
        <ThrowUp />
      </div>

      <hr className="bg-gray-500 h-1 m-8" />
      <HorizontalEmission />
    </div>
  );
};

export default Movement;
