import { useEffect } from "react";

const MonetagAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://iclickcdn.com/tag.min.js"; // Replace with your Monetag script URL if different
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div id="monetag-ad" style={{ width: "100%" }} />;
};

export default MonetagAd;
