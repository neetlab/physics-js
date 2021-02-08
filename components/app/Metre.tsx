import classNames from "classnames";
import { ReactNode } from "react";

export type InputProps = {
  readonly value: number;
  readonly disabled?: boolean;
  readonly onChange?: (value: number) => void;
};

const Input = (props: InputProps) => {
  const { value, disabled, onChange } = props;

  return (
    <input
      type="number"
      value={value}
      disabled={disabled}
      readOnly={disabled}
      className={classNames(
        "tabular-nums",
        "font-mono",
        "border",
        "border-blue-500",
        "disabled:opacity-75"
      )}
      onChange={(e) => onChange?.(Number(e.target.value))}
    />
  );
};

export type MetreProps = {
  readonly velocity: number;
  readonly acceleration: number;
  readonly initialVelocity: number;
  readonly onChangeVelocity?: (x: number) => void;
  readonly onChangeAcceleration?: (x: number) => void;
  readonly onChangeInitialVelocity?: (x: number) => void;
};

export const Metre = (props: MetreProps) => {
  const {
    velocity,
    acceleration,
    initialVelocity,
    onChangeVelocity,
    onChangeAcceleration,
    onChangeInitialVelocity,
  } = props;

  return (
    <div className="flex flex-wrap space-x-4">
      <label>
        初速度
        <Input value={initialVelocity} onChange={onChangeInitialVelocity} disabled={onChangeInitialVelocity != null} />
        [m/s]
      </label>

      <label>
        加速度
        <Input value={acceleration} onChange={onChangeAcceleration} disabled={onChangeAcceleration != null} />
        [m/s^2]
      </label>

      <label>
        速度
        <Input value={Math.round(velocity)} onChange={onChangeVelocity} disabled={onChangeVelocity != null} />
        [m/s] approx.
      </label>
    </div>
  );
};
