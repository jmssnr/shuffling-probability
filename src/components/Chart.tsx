import classes from "./Chart.module.css";
import { Data, Datum } from "../types";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Group } from "@visx/group";
import estimateDensity from "@/utils/calculateKDE";
import { LinePath } from "@visx/shape";
import { LinearGradient } from "@visx/gradient";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { colors } from "../colors";
import { KernelTypes } from "@/utils/kernels";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

type ChartProps = {
  width: number;
  height: number;
  data: Data;
  kernel: KernelTypes;
  bandwidth: number;
};

const Chart = ({ width, height, data, kernel, bandwidth }: ChartProps) => {
  const margin = {
    top: 180,
    right: 20,
    bottom: 100,
    left: 100,
  };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const keys = data.map((d) => d.key);

  const x = scaleLinear({
    domain: [-5, 57],
    range: [0, innerWidth],
  });

  const y = scaleLinear({
    domain: [0, 0.5],
    range: [innerHeight, 0],
  });

  const yCategorical = scaleBand({
    domain: keys,
    range: [0, innerHeight - 5],
    paddingInner: 1,
  });

  const densities = estimateDensity(data, x.ticks(500), kernel, bandwidth);
  const ridgeLines = densities.map((e) => {
    return (
      <LinePath
        className={classes.chart}
        key={e.key}
        //@ts-ignore
        data={e.values}
        stroke={colors.darkAccent}
        x={(d: number[]) => x(d[0])}
        //@ts-ignore
        y={(d: number[]) => y(d[1]) + yCategorical(e.key) - innerHeight}
        strokeWidth={1.5}
        fill="url(#fill-gradient)"
      />
    );
  });

  return (
    <svg width={width} height={height}>
      <rect
        rx={10}
        stroke={colors.darkGray}
        strokeWidth={5}
        fill={colors.black}
        width={width}
        height={height}
      />
      <Group left={margin.left} top={margin.top}>
        <LinearGradient
          id="fill-gradient"
          to={colors.accent}
          from={colors.darkAccent}
          opacity={0.3}
        />
        <XAxis top={innerHeight} scale={x} />
        <AxisLeft scale={y} hideAxisLine hideTicks hideZero numTicks={0} />
        <YAxis scale={yCategorical} />
        {ridgeLines}
      </Group>
    </svg>
  );
};

export default Chart;
