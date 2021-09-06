import type { NextApiRequest, NextApiResponse } from "next";
import { linkResolver, PrismicClient } from "../../Lib/cms";

export type PreviewProp = {
  ref?: string;
};

const preview = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await PrismicClient(req)
    .getPreviewResolver(
      Array.isArray(ref) ? ref[0] : ref,
      Array.isArray(documentId) ? documentId[0] : documentId
    )
    .resolve(linkResolver, "/");

  if (!redirectUrl) {
    res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ ref });
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  );
  res.end();
};

export default preview;
