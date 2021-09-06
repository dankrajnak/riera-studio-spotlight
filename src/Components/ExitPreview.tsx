import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";

const ExitPreviewButton: FC = () => {
  const { isPreview } = useRouter();
  return (
    <div>
      {isPreview ? (
        <Link href="/api/exit-preview">
          <a className="exit-button">Exit Preview</a>
        </Link>
      ) : null}
      <style jsx>{`
        .exit-button {
          color: #fff;
          position: fixed;
          bottom: 0px;
          right: 60px;
          background-color: #262629;
          display: inline-flex;
          min-width: 120px;
          margin-right: 20px;
          margin-bottom: 20px;
          padding: 10px 20px;
          box-sizing: border-box;
          align-items: baseline;
          justify-content: center;
          font-size: 14px;
          line-height: 17px;
          font-weight: bolder;
          text-decoration: none;
          border: 1px solid #262629;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ExitPreviewButton;
