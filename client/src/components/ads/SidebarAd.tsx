import { useEffect } from 'react';

interface SidebarAdProps {
  slot: string;
}

export default function SidebarAd({ slot }: SidebarAdProps) {
  useEffect(() => {
    const adsbygoogle = (window as any).adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div className="sticky top-4">
      <ins
        className="adsbygoogle"
        style={{ 
          display: 'block',
          minWidth: '300px',
          maxWidth: '300px',
          minHeight: '600px'
        }}
        data-ad-client="ca-pub-8802096290433857"
        data-ad-slot={slot}
        data-ad-format="vertical"
        data-full-width-responsive={false}
      />
    </div>
  );
}
