/**
 * Returns a new function that can only be called once within the given time.
 * @param {Function} func - the function to throttle
 * @param {*} time - the amount of time in which this function can only be called once
 */
export default function thottle<T extends unknown[]>(
  func: (...args: T) => unknown,
  time: number
): (...args: T) => void {
  let cooledDown = true;
  return (...args) => {
    if (cooledDown) {
      func(...args);
      cooledDown = false;
      setTimeout(() => (cooledDown = true), time);
    }
  };
}
