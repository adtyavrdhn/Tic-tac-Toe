export function delay(milliseconds: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(null), milliseconds)
  );
}
export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
