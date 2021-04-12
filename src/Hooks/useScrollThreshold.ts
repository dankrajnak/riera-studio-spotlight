import { useEffect, useRef } from "react";
import throttle from "../Utils/throttle";

export const useScroll = (
  listener: (delta: number) => any,
  throttleAmount = 300
): void => {
  useEffect(() => {
    const throttledFunc = throttle(
      (event: WheelEvent) => listener(event.deltaY),
      throttleAmount
    );
    const wheelListener: any = window.addEventListener("wheel", throttledFunc);

    return () => window.removeEventListener("wheel", wheelListener);
  }, [listener, throttleAmount]);
};

export const useScrollThreshold = (
  listener: (delta: number) => any,
  threshold = 0.5,
  coolDown = 1000
): void => {
  const throttledListener = useRef<(val: number) => void>(
    throttle((val: number) => listener(val), coolDown)
  );
  const callback = useRef((val: number) => {
    if (val > threshold || val < -threshold) {
      throttledListener.current(val);
    }
  });

  useScroll(callback.current);
};

export default useScrollThreshold;
