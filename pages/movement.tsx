import classNames from "classnames";
import { useState } from "react";
import { Ball } from "../components/app/Ball";
import { useLinearMotion } from "../components/hooks/useLinearMotion";
import { useAcceleration } from "../components/hooks/useAcceleration";
import { Metre, Input } from "../components/app/Metre";
import { useHorizontalLaunch } from "../components/hooks/useHorizontalLaunch";
import { useObliqueLaunch } from "../components/hooks/useObliqueLaunch";

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
          "h-96",
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
          "h-96",
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
          "h-96",
          "w-8",
          "overflow-scroll",
          "bg-gray-200",
        )}
      >
        <Ball x={0} y={-y} origin="bottom" />
      </div>
    </div>
  );
};

const HorizontalLaunch = () => {
  const [vx0, setInitialVelocity] = useState(50);
  const [x, y, vy] = useHorizontalLaunch(vx0);

  return (
    <div>
      <h2 className="text-lg font-bold">水平投射</h2>
      <h3>X軸方向</h3>
      <Metre
        initialVelocity={vx0}
        acceleration={0}
        velocity={vx0}
        onChangeInitialVelocity={setInitialVelocity}
      />

      <h3>Y軸方向</h3>
      <Metre initialVelocity={0} acceleration={-9.8} velocity={vy} />

      <div
        className={classNames(
          "relative",
          "h-96",
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

const ObliqueLaunch = () => {
  const [v0, setInitialVelocity] = useState(50);
  const [angle, setAngle] = useState(1/4);
  const [x, y, vx, vy, vx0, vy0] = useObliqueLaunch(v0, Math.PI * angle);

  return (
    <div>
      <h2 className="text-lg font-bold">斜方投射</h2>
      <h3>投射</h3>

      <label>
        初速度ベクトル長
        <Input value={v0} onChange={setInitialVelocity} />
      </label> 

      <label>
        角度 [rad] π *
        <Input value={angle} onChange={setAngle} />
      </label> 


      <h3>X軸方向</h3>
      <Metre
        initialVelocity={vx0}
        acceleration={0}
        velocity={vx}
      />

      <h3>Y軸方向</h3>
      <Metre initialVelocity={vy0} acceleration={9.8} velocity={vy} />

      <div
        className={classNames(
          "relative",
          "h-96",
          "w-full",
          "overflow-scroll",
          "bg-gray-200",
         )}
      >
        <Ball x={x} y={-y} origin="bottom" />
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

      <div className="flex justify-between">
        <FreeFall />
        <ThrowDown />
        <ThrowUp />
      </div>

      <hr className="bg-gray-500 h-1 m-8" />
      <HorizontalLaunch />
      <ObliqueLaunch />
    </div>
  );
};

export default Movement;
