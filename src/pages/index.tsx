import Chart from "@/components/Chart";
import InlineSelect from "@/components/InlineSelect";
import data from "../data.json";
import { Text, Group, Loader, Stack } from "@mantine/core";
import { colors } from "../colors";
import { useState, Suspense } from "react";
import { KernelTypes } from "@/utils/kernels";

export default function Home() {
  const [kernel, setKernel] = useState<KernelTypes>("epanechnikov");
  const [bandwidth, setBandwidth] = useState<string>("1.3");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack align="center">
        <Text
          style={{ width: 700 }}
          c={colors.gray}
          ta="center"
          size="md"
          fw={600}
        >
          Most probable locations of the top card of a deck of 52 playing cards
          after different shuffles
        </Text>
        <Suspense fallback={<Loader />}>
          <Chart
            width={700}
            height={450}
            data={data}
            kernel={kernel}
            bandwidth={Number(bandwidth)}
          />
        </Suspense>
        <Group>
          <Text ta="center" size="sm" fw={200} c={colors.gray}>
            Kernel density estimation is computed using the
          </Text>
          <InlineSelect
            value={kernel}
            //@ts-ignore
            onChange={setKernel}
            data={[
              { label: "Gaussian", value: "gaussian" },
              { label: "Uniform", value: "uniform" },
              { label: "Epanechnikov", value: "epanechnikov" },
              { label: "Triangular", value: "triangular" },
            ]}
          />
          <Text ta="center" size="sm" fw={200} c={colors.gray}>
            kernel with a bandwidth of
          </Text>
          <InlineSelect
            value={bandwidth}
            //@ts-ignore
            onChange={setBandwidth}
            data={["0.3", "0.5", "1.0", "1.3", "2.0", "3.0"]}
          />
        </Group>
      </Stack>
    </div>
  );
}
