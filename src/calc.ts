export function add(a: number, b: number): number {
    return a + b;
  }
  
export function sub(a: number, b: number): number {
    return a-b;
}

export function mul(a: number, b: number): number {
  return a*b;
}

export function div(a: number, b: number): number {
  if (!b){
    throw new Error(`${b} is not a valid integer for division`);
  }
  return a/b;
}