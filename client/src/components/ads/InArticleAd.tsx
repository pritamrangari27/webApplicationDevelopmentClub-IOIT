import { useEffect } from 'react';

interface InArticleAdProps {
  slot: string;
}

export default function InArticleAd({ slot }: InArticleAdProps) {
  useEffect(() => {
    const adsbygoogle = (window as any).adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          textAlign: 'center'
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8802096290433857"
        data-ad-slot={slot}
      />
    </div>
  );
}
