import { Select, SelectProps } from "@mantine/core";
import { colors } from "@/colors";

const InlineSelect = ({ value, onChange, data, ...props }: SelectProps) => {
  return (
    <Select
      rightSection={<div />}
      withCheckIcon={false}
      allowDeselect={false}
      value={value}
      //@ts-ignore
      onChange={onChange}
      styles={{
        root: {
          width: "115px",
        },
        input: {
          backgroundColor: colors.black,
          border: "none",
          color: colors.accent,
          borderBottom: "1.5px solid",
          borderRadius: "0px",
          borderColor: colors.darkGray,
          padding: "0px",
          textAlign: "center",
          fontWeight: "200",
        },
      }}
      data={data}
      {...props}
    />
  );
};

export default InlineSelect;
