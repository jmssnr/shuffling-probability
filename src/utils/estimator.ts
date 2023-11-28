import { KernelTypes, getKernel } from "./kernels";

const sum = (array: number[]): number => {
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};

const kernelDensityEstimator = (
  X: number[],
  data: number[],
  bandwidth: number,
  kernelType: KernelTypes = "epanechnikov"
): number[][] => {
  const kernel = getKernel(kernelType);

  return X.map((x) => {
    return [
      x,
      (1 / bandwidth / data.length) *
        sum(
          data.map((d) => {
            return kernel((x - d) / bandwidth);
          })
        ),
    ];
  });
};

export default kernelDensityEstimator;
