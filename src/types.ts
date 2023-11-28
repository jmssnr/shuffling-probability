export type Datum = {
    key: string | number;
    values: number[];
  };
  
  export type Data = Datum[];
  
  export type Kernel = (v: number) => number;