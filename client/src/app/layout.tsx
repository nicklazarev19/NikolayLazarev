import "@/styles/global.css";
import { Header } from "@/share/Header";
import { ParallaxProviderClient } from "@/providers/ParallaxProviderClient";
import { ScrollToTopOnRoute } from "@/providers/ScrollToTopOnRoute";
import { Footer } from "@/share/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicons/favicon-180x180.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/favicons/favicon-152x152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/favicons/favicon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/favicons/favicon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/favicons/favicon-114x114.png" sizes="114x114" />
      </head>
      <body className="px-[16px] lg:px-[40px]">
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
