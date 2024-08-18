import { useState } from "react";
import Icon from "./Icon";

interface Props {
  url: string;
}

const getFaviconUrlWithProvider = (url: string, provider: string) => {
  try {
    return new URL(`${new URL(url).hostname}/256`, provider).toString();
  } catch (error) {
    return "";
  }
};

const LinkFavicon = (props: Props) => {
  const { url } = props;
  const faviconProvider = "https://formidable-scarlet-whale.faviconkit.com/";
  const [faviconUrl, setFaviconUrl] = useState<string>(getFaviconUrlWithProvider(url, faviconProvider));

  const handleImgError = () => {
    setFaviconUrl("");
  };

  return faviconUrl ? (
    <img className="w-full h-auto rounded" src={faviconUrl} decoding="async" loading="lazy" onError={handleImgError} />
  ) : (
    <Icon.CircleSlash className="w-full h-auto text-gray-400" strokeWidth={1.5} />
  );
};

export default LinkFavicon;
