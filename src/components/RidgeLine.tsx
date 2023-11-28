import { LinePath } from "@visx/shape";
import { colors } from "@/colors";
import { ScaleBand, ScaleLinear } from "d3";
import classes from "./RidgeLine.module.css";
import { Group } from "@visx/group";
import { LinearGradient } from "@visx/gradient";

type RidgeLineProps = {
  key: string | number;
  data: number[][];
  x: (d: number[]) => number
  y: () => number
};

const RidgeLine = ({
  key,
  data,
  y,
  x,
}: RidgeLineProps) => {
  return (
    <Group>
      <LinearGradient
        id="fill-gradient"
        to={colors.accent}
        from={colors.darkAccent}
        opacity={0.3}
      />
      <LinePath
        className={classes.chart}
        key={key}
        data={data}
        stroke={colors.darkAccent}
        x={x}
        y={y}
        strokeWidth={1.5}
        fill="url(#fill-gradient)"
      />
    </Group>
  );
};

export default RidgeLine;
