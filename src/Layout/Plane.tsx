const Plane: React.FC<{ zIndex?: number }> = ({ zIndex = 0, children }) => (
  <>
    <div>{children}</div>
    <style jsx>
      {`
        div {
          z-index: ${zIndex};
          position: absolute;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </>
);

export default Plane;
