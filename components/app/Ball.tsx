import classNames from "classnames";

export type BallProps = {
  readonly origin: "top" | "bottom";
  readonly x: number;
  readonly y: number;
};

export const Ball = (props: BallProps) => {
  const { x, y, origin } = props;

  return (
    <div
      className={classNames(
        "absolute",
        origin === "top" ? "top-0" : "bottom-0",
        "left-0",
        "w-8",
        "h-8",
        "bg-blue-800",
        "shadow-md",
        "rounded-full"
      )}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
};

Ball.defaultProps = {
  origin: "top",
};
