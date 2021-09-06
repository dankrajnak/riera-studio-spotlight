import { NextApiRequest, NextApiResponse } from "next";

const exitPreview = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  res.clearPreviewData();

  res.writeHead(307, { Location: "/" });
  res.end();
};

export default exitPreview;
