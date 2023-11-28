export type KernelTypes =
  | "epanechnikov"
  | "gaussian"
  | "triangular"
  | "uniform";

export function epanechnikovKernel() {
  return function (x: number): number {
    return Math.abs(x) <= 1 ? 0.75 * (1 - x ** 2) : 0;
  };
}

export function gaussianKernel() {
  return function (x: number): number {
    return Math.exp(-(x ** 2) / 2) / Math.sqrt(2 * Math.PI);
  };
}

export function triangularKernel() {
  return function (x: number): number {
    return Math.abs(x) <= 1 ? 1 - Math.abs(x) : 0;
  };
}

export function uniformKernel() {
  return function (x: number): number {
    return Math.abs(x) <= 1 ? 0.5 : 0;
  };
}

export function getKernel(kernelType: KernelTypes) {
  switch (kernelType) {
    case "epanechnikov":
      return epanechnikovKernel();
    case "gaussian":
      return gaussianKernel();
    case "triangular":
      return triangularKernel();
    case "uniform":
      return uniformKernel();
    default:
      return epanechnikovKernel();
  }
}
