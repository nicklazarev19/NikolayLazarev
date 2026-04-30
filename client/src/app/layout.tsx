import "@/styles/global.css";
import { Header } from "@/share/Header";
import { ParallaxProviderClient } from "@/providers/ParallaxProviderClient";
import { ScrollToTopOnRoute } from "@/providers/ScrollToTopOnRoute";
import { Footer } from "@/share/Footer";
import Script from "next/script";
import { getCSPNonce } from "@/hooks/useCSPNonce";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = await getCSPNonce();
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const pixelNoscriptSrc = metaPixelId
    ? `https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`
    : "";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/favicon-180x180.png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/favicon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/favicon-144x144.png"
          sizes="144x144"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/favicon-120x120.png"
          sizes="120x120"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/favicon-114x114.png"
          sizes="114x114"
        />
        {metaPixelId ? (
          <Script
            id="meta-pixel-base"
            nonce={nonce}
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`,
            }}
          />
        ) : null}
      </head>
      <body className="px-[16px] lg:px-[40px]">
        {metaPixelId ? (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={pixelNoscriptSrc}
              alt=""
            />
          </noscript>
        ) : null}
        <ParallaxProviderClient>
          <ScrollToTopOnRoute />
          <Header />
          {children}
          <Footer />
        </ParallaxProviderClient>
      </body>
    </html>
  );
}
