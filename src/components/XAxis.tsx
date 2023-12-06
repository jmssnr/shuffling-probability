import { AxisBottom } from "@visx/axis";
import { colors } from "@/colors";
import { ScaleLinear } from "d3";

type XAxisProps = {
  scale: ScaleLinear<number, number>;
  top: number;
};

const XAxis = ({ scale, top }: XAxisProps) => {
  return (
    <AxisBottom
      tickValues={[1, 7, 13, 19, 26, 33, 39, 46, 52]}
      label="Position"
      top={top}
      scale={scale}
      labelProps={{
        fill: colors.gray,
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 16,
        fontWeight: 600,
      }}
      stroke={colors.darkGray}
      tickStroke={colors.darkGray}
      tickLabelProps={{
        fill: colors.gray,
        textAnchor: "middle",
        verticalAnchor: "middle",
        fontSize: 12,
      }}
    />
  );
};

export default XAxis;
