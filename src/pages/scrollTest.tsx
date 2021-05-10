import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useScroll } from "react-use";
import throttle from "../Utils/throttle";

const ScrollTest = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const docBody = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    docBody.current = document.body;
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    blockRef.current?.scrollIntoView(true);
  }, []);

  useLayoutEffect(() => {
    // Add interaction observers
    const scrollObserver = new IntersectionObserver(
      (elms) => {
        console.log("hey", elms);
      },
      { root: containerRef.current, threshold: 0.6 }
    );
    // scrollObserver.observe(redRef.current);
    // scrollObserver.observe(blueRef.current);

    return () => {
      scrollObserver.disconnect();
    };
  }, [pageNumber]);

  return mounted
    ? ReactDOM.createPortal(
        <>
          <div className="blue page" ref={blueRef} key={pageNumber - 1}></div>
          <div className="block page" ref={blockRef} key={pageNumber}></div>
          <div className="red page" ref={redRef} key={pageNumber + 1}></div>

          <style jsx>{`
            .blue {
              background-color: blue;
            }
            .red {
              background-color: red;
            }

            .container {
              height: 100vh;
              scroll-snap-type: y mandatory;
              height: 100vh;
              overflow-y: scroll;
            }

            .page {
              width: 100%;
              height: 100vh;
              scroll-snap-align: start;
              scroll-snap-stop: always;
            }
          `}</style>
          <style jsx global>{`
            body {
              height: 100vh;
              scroll-snap-type: y mandatory;
              overflow-y: scroll;
              overscroll-behavior-y: none;
            }
          `}</style>
        </>,
        docBody.current
      )
    : null;
};

const Inbetween = () => (
  <>
    <ScrollTest />
    <div className="green"></div>
    <style jsx>
      {`
        .green {
          height: 100%;
          width: 50%;
          position: fixed;
          z-index: 100;
          background-color: green;
        }
      `}
    </style>
  </>
);

export default Inbetween;
