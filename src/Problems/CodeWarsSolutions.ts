export function narcissistic(value: number): boolean {
  const strValue = value.toString();
  let result = 0;
  for (let i = 0; i < strValue.length; i++) {
    result += Math.pow(parseInt(strValue[i]), strValue.length);
  }
  return result == value;
}

export function maskify(cc: string): string {
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) cc = cc.replace(cc[i], '#');
  }
  return cc;
}

export default function isSquare(n: number): boolean {
  if (n < 0) return false;
  const sqrtN = Math.sqrt(n);

  return sqrtN === Math.floor(sqrtN);
}

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  if (n == 0) return [];

  const numbers = [a, b, c].slice(0, n);
  for (let i = 3; i < n; i++) {
    const nextElement = numbers[i - 1] + numbers[i - 2] + numbers[i - 3];
    numbers.push(nextElement);
  }

  return numbers;
}

export function number(busStops: [number, number][]): number {
  return busStops.reduce((totalPeople, [onBoard, offBoard]) => totalPeople + onBoard - offBoard, 0);
}

export function findEvenIndex(arr: number[]): number {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftSum == rightSum) index = i;
  }

  return index;
}

export function optimizedFindEvenIndex(arr: number[]): number {
  let totalSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSum == totalSum - leftSum - arr[i]) return i;
    leftSum += arr[i];
  }
  return -1;
}
