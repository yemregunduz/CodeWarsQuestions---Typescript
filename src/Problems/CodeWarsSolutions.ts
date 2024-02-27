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

export function solution(number: number): string {
  const romanNumbers : {[key: string]:number} = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = '';
  for (const key of Object.keys(romanNumbers).reverse()) {
    const value = romanNumbers[key];
    
    while (number >= value) {
      result += key;
      number -= value;
    }
  }

  return result;
}

export function createPhoneNumber(numbers: number[]): string {
  const zoneNumber = numbers.slice(0,3).join("");
  const firstNumber = numbers.slice(3,6).join("");
  const lastNumber = numbers.slice(6-10).join("");
  return `(${zoneNumber}) ${firstNumber}-${lastNumber}`
}

export const productFib = (prod: number): [number, number, boolean] => {
  let [prev, curr] = [0, 1];
  let isProductFib = false;

  while (prev * curr < prod) {
      [prev, curr] = [curr, prev + curr];
  }

  if (prev * curr === prod) {
      isProductFib = true;
  }

  return [prev, curr, isProductFib];
};

export function revRot(s:string, sz:number): string {
  if (sz <= 0 || s.length === 0 || sz > s.length) return "";

  const arr = s.split("").map(c=> Number(c))
  const chunks:string[] = [];

  let str = ""
  for (let i = 0; i < arr.length; i+=sz) {
    const chunk = arr.slice(i, i+sz)
    if(chunk.length == sz){
      let result = 0
      chunk.forEach((num:any)=>{
        result += num**3;
      })
      if(result % 2 == 0){
        str +=chunk.reverse().join("");
        chunks.push(chunk.reverse().join(""))
      } 
      else{
        chunk.push(chunk[0]);
        chunk.shift()
        chunks.push(chunk.join(""));
      }
      str +=chunk.reverse().join("");
      
    }
  }
  return chunks.join("")
}