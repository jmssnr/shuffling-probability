import { Data} from "../types";
import kernelDensityEstimator from "@/utils/estimator";
import { KernelTypes } from "./kernels";
export default function estimateDensity(data: Data, bins: number[], kernel: KernelTypes, bandwidth: number) {
  return data.map((d) => {
    return {
      key: d.key,
      values: kernelDensityEstimator(bins, d.values, bandwidth, kernel),
    };
  });
}
