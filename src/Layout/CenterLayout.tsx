const CenterLayout: React.FunctionComponent<{ height?: string }> = ({
  children,
  height,
}) => (
  <>
    <div className="holder">
      <div>{children}</div>
    </div>
    <style jsx>{`
      .holder {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <style jsx>
      {`
        .holder {
          height: ${height ?? "100%"};
          min-height: -webkit-fill-available;
        }
      `}
    </style>
  </>
);

export default CenterLayout;
