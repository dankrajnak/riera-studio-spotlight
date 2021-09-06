const exitPreview = async (_, res) => {
  res.clearPreviewData();

  res.writeHead(307, { Location: "/" });
  res.end();
};

export default exitPreview;
