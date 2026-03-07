import { useEffect } from 'react';

interface HorizontalBannerAdProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

export default function HorizontalBannerAd({ 
  slot, 
  format = 'auto', 
  responsive = true 
}: HorizontalBannerAdProps) {
  useEffect(() => {
    const adsbygoogle = (window as any).adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-8802096290433857"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
