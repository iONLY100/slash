export const getFaviconWithGoogleS2 = (url: string) => {
  try {
    const urlObject = new URL(url);
    return `https://formidable-scarlet-whale.faviconkit.com/${urlObject.hostname}/128`;
  } catch (error) {
    return undefined;
  }
};
