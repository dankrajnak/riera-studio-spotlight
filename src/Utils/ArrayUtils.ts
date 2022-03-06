export class ArrayUtils {
  static join<T, E>(arr: T[], elm: E): (T | E)[] {
    if (!arr.length || arr.length === 0) {
      return arr;
    }
    return arr.reduce(
      (sum, cur, i) =>
        i === arr.length - 1 ? [...sum, cur] : [...sum, cur, elm],
      []
    );
  }
}
