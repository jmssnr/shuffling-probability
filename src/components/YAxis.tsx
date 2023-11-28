import { AxisLeft } from "@visx/axis";
import { colors } from "@/colors";
import { ScaleBand } from "d3";

type YAxisProps = {
  scale: ScaleBand<string | number>;
};

const YAxis = ({ scale }: YAxisProps) => {
  return (
    <AxisLeft
      scale={scale}
      hideTicks
      hideAxisLine
      stroke={colors.darkGray}
      tickStroke={colors.darkGray}
      tickLabelProps={{
        fill: colors.gray,
        textAnchor: "end",
        verticalAnchor: "end",
        fontSize: 12,
      }}
    />
  );
};

export default YAxis;
