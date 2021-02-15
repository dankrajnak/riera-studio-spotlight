import { useMouse, useWindowSize } from "react-use";
import { Typography } from "antd";
import { useRef } from "react";
import SEO from "../Utils/SEO";
import CenterLayout from "../Layout/CenterLayout";

const { Title } = Typography;

const Plane: React.FC<{ zIndex?: number }> = ({ zIndex = 0, children }) => (
  <>
    <div>{children}</div>
    <style jsx>
      {`
        z-index: ${zIndex};
        position: absolute;
        width: 100%;
      `}
    </style>
  </>
);

const Box: React.FC<{ x: number; y: number; z: number }> = ({
  x,
  y,
  z,
  children,
}) => (
  <>
    <div>{children}</div>
    <style jsx>
      {`
        z-index: ${z};
        position: absolute;
        top: ${y}px;
        left: ${x}px;
      `}
    </style>
  </>
);

const WindowBox: React.FC = ({ children }) => (
  <>
    <div className="window">
      <div className="header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="14"
          viewBox="0 0 54 14"
        >
          <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
            <circle
              cx="6"
              cy="6"
              r="6"
              fill="#FF5F56"
              stroke="#E0443E"
              stroke-width=".5"
            ></circle>
            <circle
              cx="26"
              cy="6"
              r="6"
              fill="#FFBD2E"
              stroke="#DEA123"
              stroke-width=".5"
            ></circle>
            <circle
              cx="46"
              cy="6"
              r="6"
              fill="#27C93F"
              stroke="#1AAB29"
              stroke-width=".5"
            ></circle>
          </g>
        </svg>
      </div>
      <div className="content">{children}</div>
    </div>
    <style jsx>
      {`
        .window {
          min-width: 300px;
          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.07),
            0 6.7px 5.3px rgba(0, 0, 0, 0.05),
            0 12.5px 10px rgba(0, 0, 0, 0.042),
            0 22.3px 17.9px rgba(0, 0, 0, 0.035),
            0 41.8px 33.4px rgba(0, 0, 0, 0.028),
            0 100px 80px rgba(0, 0, 0, 0.02);
          border-radius: 5px;
        }

        .header {
          padding: 5px;
          display: flex;
          align-items: center;
          height: 30px;
          background-color: #011627;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        .content {
          min-height: 80px;
        }
      `}
    </style>
  </>
);

const offsetByMax = (
  base: number,
  scaleMax: number,
  movementMax: number,
  val: number,
  distanceFactor = 5
) =>
  base +
  ((val / scaleMax - 1 / 2) *
    (distanceFactor -
      distanceFactor * Math.max(Math.abs((val - base) / scaleMax), 0)) *
    movementMax) /
    distanceFactor;

export default function Home() {
  const ref = useRef(null);
  const mouse = useMouse(ref);
  const windowSize = useWindowSize();
  return (
    <>
      <SEO />
      <div ref={ref} />
      <Plane zIndex={1}>
        <CenterLayout>
          <Title level={1}>Riera Studio Spotlight</Title>
        </CenterLayout>
      </Plane>
      <Box
        x={offsetByMax(900, windowSize.width, 150, mouse.docX)}
        y={offsetByMax(300, windowSize.height, 150, mouse.docY)}
        z={0}
      >
        <WindowBox>Hey</WindowBox>
      </Box>
      <Box
        x={offsetByMax(300, windowSize.width, 50, mouse.docX)}
        y={offsetByMax(600, windowSize.height, 50, mouse.docY)}
        z={2}
      >
        <WindowBox>Hey</WindowBox>
      </Box>
      <Box
        x={offsetByMax(100, windowSize.width, 100, mouse.docX)}
        y={offsetByMax(100, windowSize.height, 100, mouse.docY)}
        z={2}
      >
        <WindowBox>Hey</WindowBox>
      </Box>
    </>
  );
}
