import Div100vh from "react-div-100vh";

const CenterLayout: React.FunctionComponent<{ height?: string }> = ({
  children,
  height,
}) => (
  <>
    <Div100vh>
      <div className="holder">
        <div>{children}</div>
      </div>
    </Div100vh>
    <style jsx>{`
      .holder {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
  </>
);

export default CenterLayout;
